import React, { Component } from 'react'
import VideoPlayer from '../components/VideoPlayer'
import MVPlayerList from '../components/MVPlayerList'
import Spinner from '../components/Spinner'

import _ from 'lodash';
import { API_URL, API_KEY, IMAGE_BASE_URL , BACKDROP_SIZE } from '../config';
import axios from 'axios'
import '../css/MoviePlayer.css'

 
export default class MoviePlayer extends Component {
    state = {
        movies: [
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
        ],
        selectedMovie : {
        duration: "2h 9m",
        id: 42678,
        imageUrl:"",
        position: 1,
        title: "Spider-MaN : Far from home",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        },
        loading: false
    }
    async componentDidMount () {
        const oldMovies = JSON.parse(localStorage.getItem('movies')) //recuperer les films de la liste de souhaite
        const results = await this.getNewMovies(oldMovies)
         const newMovies = oldMovies.map ((oldMovies, index) =>{
            return {
                id: oldMovies.id,
                position: index + 1,
                title: oldMovies.title,
                duration: results.index,
                imageUrl: `${IMAGE_BASE_URL}/${BACKDROP_SIZE}/${oldMovies.backdrop_path}`,
            }
        })
        return newMovies;
    }
    getSelectedMovies (movies , movieId) { // import  loadhash afin de decouper ce que nous choisissions de selectionné
        const selectedMovies = _.find(movies, {id : parseInt(movieId, 10)})
        return selectedMovies
    }
    getTime = movieId => { // creation d'une fonction getTime afin de récupaérer l'heure d'un film (non disponble actuellement dans notre objet)
        return new Promise((resolve,reject) => {
            const url = `${API_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=fr`;
            axios.get(url)
                .then (data => {
                    const duration = data.data.duration
                    resolve(duration)
                })
                .catch (e => {
                    console.log('e' ,e)
                    reject('error', e )
                })
        })
    }
    getNewMovies = oldMovies => { //recupereation des anciens movies afin de récupérer notre nouvelle liste de souhaits.
        let promises = [];
        for (let i = 0 ; i < oldMovies ; i++) {
            const element = oldMovies[i];
            const id = element.id;
            promises.push(this.getTime(id))
        }
    }
    render() {
        const { movies , selectedMovie } = this.state;
        return (
            <div>
                {
                    this.state.loading ? (
                        <Spinner/>
                    ) : (
                        <>
                        <VideoPlayer
                            videoUrl={selectedMovie.videoUrl}
                            imageUrl={selectedMovie.imageUrl}/>
                        <MVPlayerList
                            movies={movies}
                            selectedMovie={selectedMovie}/>
                        </>
                    )
                }
            </div>
        )
    }
}
