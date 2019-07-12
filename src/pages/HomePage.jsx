/**
|--------------------------------------------------
| Wills Media Server WebUI
| src/pages/HomePage.jsx
| by wsngamerz
|--------------------------------------------------
*/

import React, { Component } from 'react'
import { Link } from "react-router-dom"
import Button from '../components/Button';


export default class HomePage extends Component {
    render() {
        return (
            <section className="homepage-container">
                <h1>Welcome to WillsMediaServer</h1>
                <Link to="/login"><Button>Login</Button></Link>
                <Link to="/register"><Button>Register</Button></Link>
            </section>
        )
    }
}
