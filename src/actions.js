import C from './constants'
import fetch from 'isomorphic-fetch'

let BASE_URL = 'http://www.omdbapi.com/'
let API_KEY = '8a16b0ce'

export const addError = message => ({
    type: C.ADD_ERROR,
    payload: message
})

export const clearError = index => ({
    type: C.CLEAR_ERROR,
    payload: index
})

export const addMovie = movie => ({
    type: C.ADD_MOVIE,
    payload: movie
})

export const clearMovies = () => ({
    type: C.CLEAR_MOVIES
})

export const setFetching = () => ({
    type: C.SET_FETCHING
})

export const setQuery = query => ({
    type: C.SET_QUERY,
    payload: query
})

export const clearFetching = () => ({
    type: C.CLEAR_FETCHING
})

export const queryOMDB = query => dispatch => {
    if (query === '') {
        dispatch(clearFetching())
        return
    }

    dispatch(setFetching())
    dispatch(setQuery(query))
    fetch(`${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(query)}`)
        .then(response => {
            if (response.status >= 400) {
                dispatch(clearFetching())
                throw new Error('Bad response from server')
            }
            return response.json()
        })
        .then(json => {
            let movies = json.Search
            if (movies.length > 0) {
                dispatch(clearMovies())
            }
            return movies
        })
        .then(movies => {
            movies.forEach(movie => fetchMovieDetails(dispatch, movie))
            dispatch(clearFetching())
        })
        .catch(reason => {
            console.log('Error:', reason)
        })
}

const fetchMovieDetails = (dispatch, movie) => {
    fetch(`${BASE_URL}?apikey=${API_KEY}&i=${movie.imdbID}`)
        .then(response => {
            if (response.status >= 400) {
                throw new Error('Bad response from server')
            }
            return response.json()
        })
        .then(movie => {
            if (movie.Poster === 'N/A') {
                movie.Poster = '/images/placeholder.png'
            }
            dispatch(addMovie(movie))
            dispatch(clearFetching())
        })
        .catch(reason => {
            dispatch(addError(reason.message))
            console.log('Error:', reason)
        })
}
