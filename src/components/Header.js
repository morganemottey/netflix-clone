import React from 'react'
// import FontAwesome from 'react-fontawesome'
import logo from '../../src/assets/oldlogo_netflix.jpg'
import '../css/Header.css'

const Header = (props) => {
    return (
        <div className="header">
        <nav className="navbar navbar-expand-lg navbar-light navbar-95 ">
            <a className="navbar-brand" href="/">
            <img className="logo" src={logo}/> Accueil</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Séries <span class="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Films</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Nouveautés les plus regardées</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Ma liste
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
        </div>
    )
}

export default Header
