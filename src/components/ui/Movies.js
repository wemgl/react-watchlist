import React from 'react';
import '../../stylesheets/main.scss';
import MovieList from '../containers/MovieList';
import SearchBar from '../containers/SearchBar';

export default class Movies extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app">
        <h1 className="app__heading">Movies</h1>
        <SearchBar />
        <MovieList />
      </div>
    );
  }
}