import React from "react"
import MovieCard from "./MovieCard";

export default class MovieList extends React.Component {
    constructor(props) {
        super(props)
        this.getKey = this.getKey.bind(this)
        this.keyCount = 0
    }

    getKey() {
        return this.keyCount++
    }

    renderMovies() {
        return this.props.movies.map((movie, i) => {
            if (movie.imdbID === "N/A") {
                return null
            }

            return <MovieCard key={this.getKey()} movie={movie}/>
        })
    }

    conditionalRender() {
        const {movies} = this.props
        if (movies.length) {
            return this.renderMovies()
        }

        return (
            <p style={{textAlign: "center", color: "white"}}>
                Search for a movie to get started.
            </p>
        )
    }

    render() {
        return this.conditionalRender()
    }
}