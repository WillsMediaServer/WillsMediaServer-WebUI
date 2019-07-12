/**
|--------------------------------------------------
| Wills Media Server WebUI
| src/routes/MainRoutes.jsx
| by wsngamerz
|--------------------------------------------------
*/

import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import HomePage from '../pages/HomePage'


export default class MainRoutes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={ HomePage }/>
                <Route exact path="/about"/>
                <Route exact path="/login"/>
                <Route exact path="/register"/>
                <Route />
            </Switch>
        )
    }
}
