import React, { Component } from 'react'
import MVPlayerListItem from './MVPlayerListItem'

import '../css/MVPlayerList.css'

export default class MVPlayerList extends Component {
    renderList = props => {
        return props.movies.map((movie,i) =>{
            const active = movie.id === props.selectedMovie.id ? true : false;
            return (
                <MVPlayerListItem
                    {...movie}
                    key={movie.id}
                    number={i + 1}
                    active={active}
                />
            )
        })
    }
    render() {
        const position = "1";
        const total = "10";
        return (
            <div className="mvPlayerList">
            <div className="mvPlayerList--header">
                <h3>{this.props.selectedMovie.title}</h3>
                <div className="mvPlayerList--badge">{position}/{total}</div>
            </div>
            <div className="mvPlayerList--list">{this.renderList(this.props)}</div>
        </div>
        )
    }
}
