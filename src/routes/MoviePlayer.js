import React, { Component } from 'react'
import VideoPlayer from '../components/VideoPlayer'
import MVPlayerList from '../components/MVPlayerList'

import '../css/MoviePlayer.css'

const selectedMovie = {
    duration: "2h 9m",
    id: 42678,
    imageUrl:"",
    position: 1,
    title: "Spider-MaN : Far from home",
    videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
}

const movies =  [
    {
        duration: "2h 9m",
        id: 42678,
        imageUrl:"",
        position: 1,
        title: "Spider-MaN : Far from home",
        videoUrl:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    },
    {
        duration: "2h 9m",
        id: 42679,
        imageUrl:"",
        position: 1,
        title: "Spider-MaN 1: Far from home",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    },
    {
        duration: "2h 9m",
        id: 42680,
        imageUrl:"",
        position: 1,
        title: "Spider-MaN 2: Far from home",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    },
    {
        duration: "2h 9m",
        id: 42681,
        imageUrl:"",
        position: 1,
        title: "Spider-MaN 3: Far from home",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    }
]
export default class MoviePlayer extends Component {
    render() {
        return (
            <div>
               <VideoPlayer
                    videoUrl={selectedMovie.videoUrl}
                    imageUrl={selectedMovie.imageUrl}/>
                <MVPlayerList
                    movies={movies}
                    selectedMovie={selectedMovie}/>
            </div>
        )
    }
}
