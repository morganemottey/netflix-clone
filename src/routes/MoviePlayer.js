import React, { Component } from 'react'
import VideoPlayer from '../components/VideoPlayer'
import MoviePlayerList from '../components/MoviePlayerList'

export default class MoviePlayer extends Component {
    render() {
        return (
            <div>
               <VideoPlayer/>
                <MoviePlayerList/>
            </div>
        )
    }
}
