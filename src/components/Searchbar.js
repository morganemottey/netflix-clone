import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome';
import '../css/Searchbar.css'

export default class Searchbar extends Component {
    state = {
        value: ''
    }
    handleChange = (e) => {
        this.setState({ value : e.target.value })
    }
    render() {
        return (
            <div className="searchBar--container">
            <div className="searchBar">
            <input 
                className="searchBar--input" 
                type="text" 
                placeholder="Rechercher un Film" 
                value={this.state.value}
                onChange={this.handleChange}
                    />
                <div className="searchBar--submit">
                    <FontAwesome className="searchIcon" name="search" />
                </div>
            </div>
        </div>
        )
    }
}
