import React from 'react';
import MovieCard from '../containers/MovieCard';
import App from './App';

export default class MovieList extends App {
  constructor(props) {
    super(props);
  }

  renderMovies() {
    return this.props.movies.map(movie => {
      if (movie.imdbID === 'N/A') {
        return null;
      }

      return <MovieCard key={this.key} movie={movie} />;
    });
  }

  conditionalRender() {
    if (this.props.movies.length) {
      return this.renderMovies();
    }

    return (
      <p style={{ textAlign: 'center', color: 'white' }}>
        Search for a movie to get started.
      </p>
    );
  }

  render() {
    return this.conditionalRender();
  }
}