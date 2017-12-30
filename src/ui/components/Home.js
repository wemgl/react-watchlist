import React from "react"
import Navigation from "./Navigation"
import "../stylesheets/main.scss"

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <h1 className="heading">Movies</h1>
                <div>Movie container</div>
                <Navigation/>
            </div>
        )
    }
}