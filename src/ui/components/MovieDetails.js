import React from "react"

export default class MovieDetails extends React.Component {
    render() {
        return <p>Movie Details {this.props.match.imdbID}</p>
    }
}