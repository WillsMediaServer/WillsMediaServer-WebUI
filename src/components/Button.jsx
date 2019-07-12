/**
|--------------------------------------------------
| Wills Media Server WebUI
| src/components/Button.jsx
| by wsngamerz
|--------------------------------------------------
*/

import React, { Component } from 'react'


export default class Button extends Component {
    render() {
        let classlist = "button"
        const style = this.props.style ? ` button-${ this.props.style }` : " button-primary"

        classlist += style

        return (
            <button className={ classlist }>{ this.props.children }</button>
        )
    }
}
