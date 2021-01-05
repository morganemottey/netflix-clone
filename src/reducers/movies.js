import { ADD_MOVIE, REMOVE_MOVIE, GET_MOVIES, GET_NUMBERS } from '../actions'

const initialState = {
    movies: [], //initilisation de l'état de nos films avec un tableau à vide
    number: 0   // initilisation de nos nombre à 0
}

export const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MOVIE:
            return {
                movies : action.payload,
                number: action.payload.length
            }
        case REMOVE_MOVIE: {
            return {
                movies: action.payload,
                number: state.number - 1
            }
        }
        case GET_MOVIES: {
            return {
                ...state,
                movies: action.payload
            }
        }
        case GET_NUMBERS: {
            return {
                ...state,
                number: action.payload.length
            }
        }
        default:
            return state;
    }
}