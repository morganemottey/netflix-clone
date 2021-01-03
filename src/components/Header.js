import React from 'react'
import FontAwesome from 'react-fontawesome'
// import logo from '../../src/assets/oldlogo_netflix.jpg'
import '../css/Header.css'

const Header = (props) => {
    return (
        <div className="header">
            <FontAwesome className="header--movie" name="film" size="5x" />
        <h3>NETFLIX</h3>
            <FontAwesome className="header--heart" name="heart" size="5x" />
        <div className="header--badge">{props.badge}</div>
    </div>
    )
}

export default Header
