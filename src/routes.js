import React from "react"
import {Route, Router, Switch} from "react-router-dom"
import createBrowserHistory from "history/createBrowserHistory"
import Navigation from "./ui/components/Navigation"
import Movies from "./ui/components/Movies"
import MovieDetails from "./ui/components/MovieDetails"

const history = createBrowserHistory()

export default class Routes extends React.Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route exact path="/" children={() => (
                        <Navigation>
                            <Movies/>
                        </Navigation>
                    )}/>
                    <Route path="/details/:imdbID" render={({match}) => (
                        <Navigation>
                            <MovieDetails match={match}/>
                        </Navigation>
                    )}>
                    </Route>
                </Switch>
            </Router>
        )
    }
}