import React, { Component } from 'react'
import ReactPlayer from 'react-player'

import '../css/VideoPlayer.css'

export default class VideoPlayer extends Component {
    handleEnded = () => {
        console.log('handle')
    }
    render() {
        return (
            <div>
                <ReactPlayer
                    url={this.props.videoUrl}
                    playing={false}
                    width="100%"
                    height="100%"
                    style={{ position: "absolute", top: "0", left: "0" }}
                    light={this.props.imgUrl}
                    onEnded={this.handleEnded}
                />
            </div>
        )
    }
}
