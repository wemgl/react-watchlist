import React from "react"
import "../stylesheets/movie-card.scss"

export default class MovieCard extends React.Component {
    render() {
        return (
            <div className="movie">
                <div>
                    <img className="movie__poster" src={"http://via.placeholder.com/130x200"} alt="movie poster"/>
                </div>
                <div className="movie__right">
                    <h2 className="movie__title">Movie Title</h2>
                    <p className="movie__genres">
                        <span className="movie__genre">Genre #1</span>
                        <span className="movie__genre__separator">|</span>
                        <span className="movie__genre">Genre #2</span>
                        <span className="movie__genre__separator">|</span>
                        <span className="movie__genre">Genre #3</span>
                    </p>
                    <div className="movie__rating">
                        <p className="movie__score">
                            <span>8.2</span>
                            <span>/</span>
                            <span>10</span>
                        </p>
                        <p className="movie__dimension movie__dimension--3d">3D</p>
                    </div>
                    <p className="movie__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec faucibus velit. Nulla accumsan purus sed nibh placerat dictum. Ut pellentesque vel lorem eu posuere. Suspendisse orci nibh, fringilla vulputate augue vestibulum, efficitur fermentum nulla. Morbi at metus at mauris imperdiet faucibus ac ut elit. </p>
                </div>
            </div>
        )
    }
}