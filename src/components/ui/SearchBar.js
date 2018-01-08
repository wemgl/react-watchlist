import React from "react"
import "../../stylesheets/searchbar.scss"
import fetch from "isomorphic-fetch"

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            query: "",
            loading: false
        }
        this.submit = this.submit.bind(this)
    }

    submit(event) {
        event.preventDefault()
        const {query} = this.refs
        if (query.value === "") {
            return
        }

        this.setState({loading: true, query: query.value})
        fetch(`http://www.omdbapi.com/?apikey=8a16b0ce&s=${encodeURIComponent(query.value)}`)
            .then(response => {
                if (response.status >= 400) {
                    throw new Error("Bad response from server")
                }
                return response.json()
            })
            .then(json => json.Search)
            .then(movies => {
                this.setState({loading: false})
                this.props.updateMovieList(movies)
            })
            .catch(reason => {
                console.log("Error:", reason)
            })
    }

    render() {
        return (
            <form onSubmit={this.submit} className="search">
                <input className="search__bar"
                       type="text"
                       ref="query"
                       defaultValue={this.state.query}
                       name="searchbar"
                       placeholder="e.g. Kill Bill vol.2"
                />
                <button className="search__btn">Search</button>
            </form>
        )
    }
}
