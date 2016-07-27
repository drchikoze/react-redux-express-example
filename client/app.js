import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore.js';

import { getRoutes } from './routes';
const initialState = {
  auth: {
    isLoginedIn: false,
    isLogining: false,
    errorMsg: null,
    user: null,
  }
}
const store = configureStore(initialState);

ReactDOM.render(
  <Provider store={store}>
      <Router children={getRoutes(store)} history={ browserHistory } />
  </Provider>,
  document.getElementById('app')
);
