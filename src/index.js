/**
|--------------------------------------------------
| Wills Media Server WebUI
| src/index.js
| by wsngamerz
|--------------------------------------------------
*/

import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import * as serviceWorker from './serviceWorker'
import "./styles/main.scss"


ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.register()
