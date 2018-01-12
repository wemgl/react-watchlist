import React from "react"
import "../../stylesheets/moviecard.scss"
import isoLanguages from './iso-languages.json'
import bs from 'binarysearch'
import {Link} from "react-router-dom";
import App from './App'

export default class MovieCard extends App {
    constructor(props) {
        super(props)

        this.renderGenres = this.renderGenres.bind(this)
        this.renderLanguages = this.renderLanguages.bind(this)
        this.reloadComponent = this.reloadComponent.bind(this)
    }

    reloadComponent() {
        this.forceUpdate()
    }

    renderGenres(movie) {
        const genres = movie.Genre.split(",")
        if (genres.length === 1) {
            return <span className="movie__genre">{genres[0]}</span>
        }

        const renderedGenres = genres
            .map(genre => genre.trim())
            .map((genre, i) => {
                const components = [<span key={this.key} className="movie__genre">{genre}</span>]
                if (i < genres.length - 1) {
                    components.push(<span key={this.key} className="movie__genre__separator">|</span>)
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

        if (codes.length > 0) {
            return codes
                .filter(code => typeof code !== "undefined")
                .map((code) => <p key={this.key} className="movie__language">{code}</p>)
        }
    }

    render() {
        const {movie} = this.props
        if (movie.imdbID === "N/A") {
            return null
        }

        return (
            <div className="movie" data-imdbid={movie.imdbID}>
                <Link className="movie__link" key={this.key} to={`/details/${movie.imdbID}`}>
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
                </Link>
            </div>
        )
    }
}