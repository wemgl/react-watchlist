import C from '../constants'
import {combineReducers} from 'redux'

export const movies = (state = [], action) => {
    switch (action.type) {
        case C.ADD_MOVIE:
            return [...state, action.payload]
        default:
            return state
    }
}

export const fetching = (state = false, action) => {
    switch (action.type) {
        case C.SET_FETCHING:
            return true
        case C.CLEAR_FETCHING:
            return false
        default:
            return state
    }
}

export const errors = (state = [], action) => {
    switch (action.type) {
        case C.ADD_ERROR:
            return [...state, action.payload]
        case C.CLEAR_ERROR:
            return state.filter((error, i) => action.payload !== i)
        default:
            return state
    }
}

export const query = (state = "", action) => {
    if (action.type === C.SET_QUERY) {
        return action.payload
    }

    return state
}

export default combineReducers({
    movies,
    errors,
    fetching,
    query
})