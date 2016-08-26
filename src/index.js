import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from './reducers/reducers.js';
import App from './containers/App.js';

const loggerMiddleware = createLogger();
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware,
    ),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

let mountRoot = document.getElementById('app');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  mountRoot
);
