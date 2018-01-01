import React from "react"
import MovieCard from "./MovieCard";

export default class MovieList extends React.Component {
    constructor(props) {
        super(props)
    }

    renderMovies() {
        return this.props.movies.map((movie, i) => <MovieCard key={i} movie={movie}/>)
    }

    render() {
        const {movies} = this.props
        return (movies.length)
            ? this.renderMovies()
            : <p style={{textAlign: "center", color: "white"}}>Search for a movie to get started.</p>
    }
}