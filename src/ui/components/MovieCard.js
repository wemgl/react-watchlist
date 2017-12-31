import React from "react"
import "../stylesheets/moviecard.scss"
import fetch from "isomorphic-fetch"
import isoLanguages from './iso-languages.json'
import bs from 'binarysearch'

export default class MovieCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            movie: props.movie,
            loading: false,
            poster: ""
        }
        this.keyCount = 0

        this.renderGenres = this.renderGenres.bind(this)
        this.renderLanguages = this.renderLanguages.bind(this)
        this.getKey = this.getKey.bind(this)
    }

    getKey() {
        return this.keyCount++
    }

    renderGenres(movie) {
        const genres = movie.Genre.split(",")
        if (genres.length === 1) {
            return <span className="movie__genre">{genres[0]}</span>
        }

        const renderedGenres = genres
            .map(genre => genre.trim())
            .map((genre, i) => {
                const components = [<span key={this.getKey()} className="movie__genre">{genre}</span>]
                if (i < genres.length - 1) {
                    components.push(<span key={this.getKey()} className="movie__genre__separator">|</span>)
                }
                return components
            })

        return <p className="movie__genres">{renderedGenres}</p>
    }

    renderLanguages(movie) {
        let movieLanguages = movie.Language.split(",");
        let codes = []
        movieLanguages
            .map(language => language.trim())
            .forEach(language => {
                let index = bs(isoLanguages, language, (value, find) => {
                    return value.name.localeCompare(find)
                })

                if (index > 0) {
                    codes.push(isoLanguages[index].code)
                }
            })

        console.log("Codes:", codes)
        if (codes.length > 0) {
            return codes
                .filter(code => typeof code !== "undefined")
                .map((code) => <p key={this.getKey()} className="movie__language">{code}</p>)
        }
    }

    componentDidMount() {
        this.setState({loading: true})
        fetch(`http://www.omdbapi.com/?apikey=8a16b0ce&i=${this.state.movie.imdbID}`)
            .then(response => {
                if (response.status >= 400) {
                    throw new Error("Bad response from server")
                }
                return response.json()
            })
            .then(movie => {
                if (movie.Poster === "N/A") {
                    movie.Poster = "/images/placeholder.png"
                }
                this.setState({movie, loading: false})
            })
            .catch(reason => {
                console.log("Error:", reason)
            })
    }

    render() {
        const {movie} = this.state
        return (this.state.loading) ? <p>Loading {movie.Title} data...</p>
            : <div className="movie" data-imdbid={movie.imdbID}>
                <div>
                    <img className="movie__poster" src={movie.Poster} alt="movie poster"/>
                </div>
                <div className="movie__right">
                    <h2 className="movie__title">{movie.Title}</h2>
                    {(movie.Genre) ? this.renderGenres(movie) : null}
                    <div className="movie__rating">
                        <p className="movie__score">
                            <span>{movie.imdbRating}</span>
                            <span>/</span>
                            <span>10</span>
                        </p>
                        {(movie.Language) ? this.renderLanguages(movie) : null}
                    </div>
                    <p className="movie__description">{movie.Plot}</p>
                </div>
            </div>
    }
}