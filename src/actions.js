import C from './constants';
import fetch from 'isomorphic-fetch';

let BASE_URL = 'http://www.omdbapi.com/';
let API_KEY = '8a16b0ce';

export const addError = message => ({
  type: C.ADD_ERROR,
  payload: message
});

export const clearError = index => ({
  type: C.CLEAR_ERROR,
  payload: index
});

export const addMovie = movie => ({
  type: C.ADD_MOVIE,
  payload: movie
});

export const clearMovies = () => ({
  type: C.CLEAR_MOVIES
});

export const setFetching = () => ({
  type: C.SET_FETCHING
});

export const setQuery = query => ({
  type: C.SET_QUERY,
  payload: query
});

export const clearFetching = () => ({
  type: C.CLEAR_FETCHING
});

export const queryOMDB = query => async (dispatch) => {
  if (query === '') {
    dispatch(clearFetching());
    return;
  }

  dispatch(setFetching());
  dispatch(setQuery(query));

  try {
    let response = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(query)}`);
    if (response.status === 200) {
      let json = await response.json();
      let movies = await json.Search;
      if (movies.length > 0) {
        dispatch(clearMovies());
      }

      movies.forEach(async (movie) => {
        await fetchMovieDetails(dispatch, movie);
      });

      dispatch(clearFetching());
    }
  } catch (error) {
    console.log('Error:', reason);
  }
};

const fetchMovieDetails = async (dispatch, movie) => {
  try {
    let response = await fetch(`${BASE_URL}?apikey=${API_KEY}&i=${movie.imdbID}`);
    if (response.status === 200) {
      let movie = await response.json();
      if (movie.Poster === 'N/A') {
        movie.Poster = '/images/placeholder.png';
      }

      dispatch(addMovie(movie));
      dispatch(clearFetching());
    }
  } catch (error) {
    dispatch(addError(error.message));
  }
};
