import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';
import firebase from 'firebase';
import  MVPlayerList from '../components/MVPlayerList'
import VideoPlayer from '../components/VideoPlayer'
import Spinner from '../components/Spinner'
import { API_KEY, API_URL, IMAGE_BASE_URL, BACKDROP_SIZE } from '../config';
import { calcTime } from '../utils/helpers';
import '../css/MoviePlayer.css';
import { renderLogin } from '../utils/helpers';

const flag = renderLogin(); //permet de rediriger l'utilisateur non connecté
let newMovies = [];

class MoviePlayer extends Component {
    state = {
        movies : [],
        selectedMovie: {},
        loading: true,
        flag: flag
    }
    async componentDidMount() {
        if(!this.state.flag) {
            this.props.history.push({ pathname: '/login'});
            return;
        }
        setTimeout(() => {
            const user = firebase.auth().currentUser;
            let dbRef;
            if(user) {
                dbRef = firebase.database().ref(`users/${user.uid}`)
                dbRef.on('value', async snapshot => {
                    const data = snapshot.val();
                    console.log('data', data);
                    if(data) {
                        const targetDate = data.validUntil;
                        const now = new Date().getTime();
                        if(targetDate > now) {
                            console.log('abonnement valide');
                            // 
                            const oldMovies = JSON.parse(localStorage.getItem('movies'));
                            const results = await this.getNewMovies(oldMovies);
                            newMovies = oldMovies.map((oldMovie, index) => {
                                return {
                                    id: oldMovie.id,
                                    position: index +1,
                                    title: oldMovie.title,
                                    duration: results[index],
                                    imageUrl: `${IMAGE_BASE_URL}/${BACKDROP_SIZE}/${oldMovie.backdrop_path}`,
                                    videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                                }
                            })

                            const id = this.props.match.params.id;

                            if (id) {
                                const selectedMovie = this.getSelectedMovie(newMovies, id);
                                this.setState({
                                    loading: false,
                                    movies: [...newMovies],
                                    selectedMovie
                                })
                            } else {
                                const selectedMovie = newMovies[0];
                                this.setState({
                                    loading: false,
                                    movies: [...newMovies],
                                    selectedMovie
                                })
                                this.props.history.push({
                                    pathname: `/player/${selectedMovie.id}`
                                })
                            }
                        } else {
                            this.props.history.push({ pathname: '/payment'});
                        }
                    } else {
                        this.props.history.push({ pathname: '/payment'});
                    }
                })
            } else {
                this.props.history.push({ pathname: '/login'});
            }
        }, 3000);   
    }
    componentDidUpdate(prevProps) { 
        console.log('component did update');
        if(prevProps.match.params.id !== this.props.match.params.id) {
            const id = this.props.match.params.id;
            const selectedMovie = this.getSelectedMovie(newMovies, id);
            this.setState({ selectedMovie });
        }
    }
    getSelectedMovie = (movies, movieId) => { // import  loadhash afin de decouper ce que nous choisissions de selectionné
        const selectedMovie = _.find(movies, { id : parseInt(movieId, 10) });
        return selectedMovie;
    }
    handleEnded = () => {
        console.log('video ended');
        const { movies, selectedMovie } = this.state;
        const movieIndex = movies.findIndex(movie => selectedMovie.id === movie.id);
        const nextMovieIndex = movieIndex === movies.length - 1 ? 0 : movieIndex + 1;
        const NewSelectedMovie = movies[nextMovieIndex];
        this.props.history.push({ pathname: `/player/${NewSelectedMovie.id}`});
        this.setState({ selectedMovie: NewSelectedMovie });
    }
    getTime = movieId => { // creation d'une fonction getTime afin de récupaérer l'heure d'un film (non disponble actuellement dans notre objet)
        return new Promise((resolve, reject) => {
            const url = `${API_URL}/movie/${movieId}?api_key=${API_KEY}&language=fr`;
            axios.get(url)
                .then(data => {
                    const duration = data.data.runtime;
                    resolve(duration)
                })
                .catch(e => {
                    console.log('e',e);
                    reject('error ', e);
                })
        })
    }
    getNewMovies = async oldMovies => { //recupereation des anciens movies afin de récupérer notre nouvelle liste de souhaits.
        let promises = [];
        for(let i = 0; i<oldMovies.length; i++) {
            const element = oldMovies[i];
            const id = element.id;
            const time = await this.getTime(id);
            promises.push(calcTime(time));
        }
        return Promise.all(promises);
    }
    render() {
        const { movies, selectedMovie } = this.state;
        return (
            <div className="moviePlayer">
            {this.state.loading ? 
            (
                <Spinner />
            ): 
            (
                <>
                    <VideoPlayer 
                        videoUrl={selectedMovie.videoUrl}
                        imageUrl={selectedMovie.imageUrl}
                        handleEnded={this.handleEnded}
                    />
                    <MVPlayerList 
                        movies={movies}
                        selectedMovie={selectedMovie}
                    />
                </>
            )}
            </div>
        )
    }
}

export default MoviePlayer;