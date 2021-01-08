import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import imgSrc from '../assets/images/Fast_large.jpg'
export default class VideoPlayer extends Component {
    render() {
        const videoUrl = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        return (
            <div>
                <ReactPlayer
                    url={videoUrl}
                    playing={false}
                    width="100%"
                    height="100%"
                    style={{ position: "absolute", top: "0", left: "0" }}
                    light={imgSrc}
                    onEnded={this.handleEnded}
                />
            </div>
        )
    }
}
