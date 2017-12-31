import React from "react"
import Navigation from "./Navigation"
import "../stylesheets/main.scss"
import MovieCard from "./MovieCard"
import SearchBar from "./SearchBar"
// import fetch from "isomorphic-fetch"

export default class Home extends React.Component {
    componentWillMount() {
/*
        this.setState({
            loading: false,
            movieCards: []
        })
*/
    }

    render() {
        return (
            <div className="app">
                <h1 className="app__heading">Movies</h1>
                <SearchBar/>
                <div>
                    <MovieCard/>
                </div>
                <Navigation/>
            </div>
        )
    }
}