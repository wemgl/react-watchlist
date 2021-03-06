import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import { Provider } from 'react-redux';
import storeFactory from './store';
import initialState from './initialState.json';
import 'babel-polyfill';

const store = storeFactory(initialState);

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('react-container')
);