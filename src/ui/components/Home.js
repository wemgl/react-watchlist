import React from "react"
import Navigation from "./Navigation"
import "../stylesheets/main.scss"
import MovieList from "./MovieList"
import SearchBar from "./SearchBar"

export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: []
        }
        this.updateMovieList = this.updateMovieList.bind(this)
    }

    updateMovieList(movies) {
        this.setState({movies: []})
        this.setState({movies})
    }

    render() {
        return (
            <div className="app">
                <h1 className="app__heading">Movies</h1>
                <SearchBar updateMovieList={this.updateMovieList}/>
                <MovieList movies={this.state.movies}/>
                <Navigation/>
            </div>
        )
    }
}