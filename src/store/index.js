import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import appReducer from './reducers';

export default (initialState = {}) => applyMiddleware(thunk)(createStore)(appReducer, initialState)