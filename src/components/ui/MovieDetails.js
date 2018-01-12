import React from 'react';

export default class MovieDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <p>Movie Details {this.props.match.params.imdbID}</p>;
  }
}