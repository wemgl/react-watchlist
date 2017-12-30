import React from "react"
import {Link} from "react-router-dom"
import FilmIcon from "react-icons/lib/fa/film"
import Bell from "react-icons/lib/fa/bell-o"
import Star from "react-icons/lib/fa/star-o"
import User from "react-icons/lib/fa/user"
import "../stylesheets/navigation.scss"

const Navigation = () => {
    return (
        <nav className="nav">
            <ul className="nav__list">
                <li>
                    <Link className="nav__link nav__link--selected" to="/">
                        <FilmIcon/>
                    </Link>
                </li>
                <li>
                    <Link className="nav__link" to="#">
                        <Bell/>
                    </Link>
                </li>
                <li>
                    <Link className="nav__link" to="#">
                        <Star/>
                    </Link>
                </li>
                <li>
                    <Link className="nav__link" to="#">
                        <User/>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation

