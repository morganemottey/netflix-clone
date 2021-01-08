import React, { Component } from 'react'
import '../css/MVPlayerListItem.css'

export default class MVPlayerListItem extends Component {
    render() {
        const activeClass = this.props.active ? 'mvPlayerListItem active' : 'mvPlayerListItem';
        return (
            <>
                <div className={activeClass}>
                    <div className="mvPlayerListItem--number">{this.props.number}</div>
                    <div className="mvPlayerListItem--title">{this.props.title}</div>
                    <div className="mvPlayerListItem--time">{this.props.duration}</div>
                </div>
                <div className="mvPlayerListItem--divider" />
            </>
        )
    }
}
