import C from '../constants'
import {combineReducers} from 'redux'

export const movies = (state = []) => {

}

export const errors = (state = []) => {

}

export const fetching = (state = false) => {

}

export default combineReducers({
    movies,
    errors,
    fetching
})