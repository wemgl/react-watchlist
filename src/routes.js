import React from "react"
import {BrowserRouter as Router, hashHistory, Route} from "react-router-dom"
import Home from "./ui/components/Home"

const routes =
    <Router history={hashHistory}>
        <Route exact path="/" component={Home}/>
    </Router>

export default routes
