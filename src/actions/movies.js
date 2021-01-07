import { ADD_MOVIE , REMOVE_MOVIE , GET_MOVIES , GET_NUMBERS} from './index'

export const addMovie = movie => {
    let movies = JSON.parse(localStorage.getItem('movies'))
    if (movies) { // nous vérifions si notre tableau contient des films
        movies = [...movies, movie]
    } else { // sinon on lui ajoute des films
        movies = [];
        movies.push(movie);
    }
    localStorage.setItem("movies", JSON.stringify(movies)) // Json.stringify convertit une valeur JavaScript en chaîne JSON.
    return {
        type: ADD_MOVIE,
        payload: movies
    }
}
export const removeMovie = movieID => {
    const oldMovies = JSON.parse(localStorage.getItem('movies')) // on recupere les anciens films
    const movies = oldMovies.filter(movie => movie.id !== movieID); // filter() crée et retourne un nouveau tableau contenant tous les éléments du tableau d'origine
    localStorage.setItem('movies' , JSON.stringify(movies));
    return {
        type: REMOVE_MOVIE,
        payload: movies
    }
}
export const getMovies = () => {
    const movies = JSON.parse(localStorage.getItem('movies'))
    return {
        type: GET_MOVIES,
        payload: movies
    }
}
export const getNumbers = () => {
    const movies = JSON.parse(localStorage.getItem('movies'))
    let number;
    if (movies) {
        number = movies.length;
    } else {
        number = 0;
    }
    return {
        type: GET_NUMBERS,
        payload: number
    }
}