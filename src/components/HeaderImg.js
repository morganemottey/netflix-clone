import React, { Component } from 'react'
import '../css/HeaderImg.css'
import '../App.css'

export default class HeaderImg extends Component {
    render() {
        return (
            <div className="headerImg"
                style={{
                    background: `url(${this.props.imgSrc}) no-repeat`}}
            >
                <div className="headerImg--overlay">
                    <h3 className="headerImg--overlay__title">{this.props.title}</h3>
                    <p className="headerImg--overlay__desc">{this.props.overview}</p>
                </div>
            </div>
        )
    }
}
