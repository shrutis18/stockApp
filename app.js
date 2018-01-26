import ReactDOM from 'react-dom';
import React from 'react';
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';
import {rootReducer} from './combineReducers.js';
import {ConnectedRouter} from 'react-router-redux'
import {getRoutes} from './src/routes.js';
import {routerMiddleware, routerReducer as routing} from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

const history = createHistory()

const middleware = routerMiddleware(history)

const store = createStore(rootReducer, applyMiddleware(thunk,middleware))

ReactDOM.render(
  <Provider store={store}>
     <div>
      <ConnectedRouter history = {history}>
       {getRoutes(store)}
      </ConnectedRouter>
       </div>
  </Provider>,
  document.getElementById('root')
);