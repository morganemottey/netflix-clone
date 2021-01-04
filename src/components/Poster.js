import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import '../css/Poster.css';

class Poster extends Component {
    state = {
        hover: false
    }
    showOverlay = () => {
        if(this.state.hover) {
            return;
        }
        this.setState({ hover: true });
    }
    hideOverlay = () => {
        this.setState({ hover: false });
    }
    remove = () => {
        // à implémenter avec redux
        console.log('remove avec redux');
        //this.props.removeM(this.props.id)
    }
    add = () => {
        // à implémenter avec redux
        console.log('add avec redux');
        //this.props.addM(this.props.movie)
    }
    render() {
        return (
            <div className="poster"
            onMouseEnter={this.showOverlay}
            onMouseLeave={this.hideOverlay}
            >
                    <img className="poster--img" src={this.props.imgSrc} alt="poster" />
                {this.state.hover ? 
                (
                    <div className="poster--overlay">
                        <h3 className="poster--overlay__text">LISTE DE SOUHAITS</h3>
                        {this.props.whished ? 
                            (
                                <FontAwesome onClick={this.remove} className="poster--icon" name="heart" size="3x" />
                            ) : 
                            (
                                <FontAwesome onClick={this.add} className="poster--icon__not" name="heart-o" size="3x" />
                            )
                        }
                    </div>
                ): null}
            </div>
        )
    }
}

export default Poster