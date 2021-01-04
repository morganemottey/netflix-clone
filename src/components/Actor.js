import React, { Component } from 'react'

import '../css/Actor.css'

export default class Actor extends Component {
    state = {
        hover: false
    }
    render() {
        const name = this.props.name.split(" ") //permet de diviser une chaîne de caractères à partir d'un séparateur pour fournir un tableau de sous-chaînes.
        return (
            <div className="actor">
                <img className="actor--img" alt="actor" src={this.props.imgSrc}/>
                {
                    this.state.hover ? 
                    (
                        <div className="actor--overlay">
                            <h3 className="actor--name">{name[0]}</h3>
                            <h3 className="actor--name">{name[1]}</h3>
                        </div>
                    ) : null
                }
            </div>
        )
    }
}
