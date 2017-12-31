import React from "react"
import MovieCard from "./MovieCard";

export default class MovieList extends React.Component {
    renderMovies() {
        return this.props.movies.map((movie, i) => <MovieCard key={i} movie={movie}/>)
    }

    render() {
        const {movies} = this.props
        return (movies.length)
            ? this.renderMovies()
            : <p style={{textAlign: "center", color: "white"}}>Search for any movie in the search field above to get started.</p>
    }
}