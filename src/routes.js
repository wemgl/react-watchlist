import React from "react"
import {BrowserRouter as Router, hashHistory, Route} from "react-router-dom"
import App from "./ui/components/App"

const routes =
    <Router history={hashHistory}>
        <Route path="/" component={App}/>
    </Router>

export default routes
