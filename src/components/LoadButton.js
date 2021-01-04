import React, { Component } from 'react'
import '../css/LoadButton.css'

import Spinner from './Spinner'


export default class LoadButton extends Component {
    render() {
        return (
            <>
            {
                this.props.loading ? (
                    <Spinner/>
                ) : 
                (
                    <div className="loadButton" onClick={this.props.onButtonClick}>
                        <h3 className="loadButton--text">VOIR PLUS</h3>
                    </div>
                )
            }
            </>
        )
    }
}
