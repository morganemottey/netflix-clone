import React from 'react'
import FontAwesome from 'react-fontawesome'
import { Link } from 'react-router-dom'
import '../css/Header.css'

const Header = (props) => {
    return (
        <div className="header">
        <Link to={{ pathname: '/'}}>
            <FontAwesome className="header--movie" name="film" size="5x" />
        </Link>
        <h3>NETFLIX</h3>
            <FontAwesome className="header--heart" name="heart" size="5x" />
        <div className="header--badge">{props.badge}</div>
    </div>
    )
}

export default Header
