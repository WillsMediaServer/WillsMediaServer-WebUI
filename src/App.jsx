/**
|--------------------------------------------------
| Wills Media Server WebUI
| src/App.jsx
| by wsngamerz
|--------------------------------------------------
*/

import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import MainRoutes from './routes/MainRoutes'


export default class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/app"/>
                    <Route path="/" component={ MainRoutes }/>
                </Switch>
            </Router>
        )
    }
}
