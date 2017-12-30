import React from "react"
import Navigation from "./Navigation"
import "../stylesheets/main.scss"
import MovieCard from "./MovieCard"
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
            <div>
                <h1 className="heading">Movies</h1>
                <div>
                    <MovieCard/>
                </div>
                <Navigation/>
            </div>
        )
    }
}