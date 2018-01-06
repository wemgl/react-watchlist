import React from "react"
import {BrowserRouter as Router, NavLink} from "react-router-dom"
import FilmIcon from "react-icons/lib/fa/film"
import Bell from "react-icons/lib/fa/bell-o"
import Star from "react-icons/lib/fa/star-o"
import User from "react-icons/lib/fa/user"
import "../stylesheets/navigation.scss"

export default class Navigation extends React.Component {
    render() {
        return (
            <div>
                {this.props.children}
                <Router>
                    <nav className="nav">
                        <ul className="nav__list">
                            <li>
                                <NavLink className="nav__link nav__link--selected" to="/">
                                    <FilmIcon/>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="nav__link" to="#">
                                    <Bell/>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="nav__link" to="#">
                                    <Star/>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="nav__link" to="#">
                                    <User/>
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </Router>
            </div>
        )
    }
}
