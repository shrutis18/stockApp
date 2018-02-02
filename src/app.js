import ReactDOM from 'react-dom';
import React from 'react';
import { createStore, combineReducers } from 'redux';
import { connect, Provider} from 'react-redux';
import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';
import { reducer } from './reducer/stockReducer';
import {ConnectedRouter, routerReducer, routerMiddleware} from 'react-router-redux'
import {getRoutes} from './routes.js';
import {
  HashRouter as Router,
  Route, 
} from 'react-router-dom'
import { createHashHistory } from 'history'
import StockTable from './containers/stockTableContainer';
import StockDetail from './containers/stockDetailContainer';

const middleware = routerMiddleware(history)

const reducers =  combineReducers({
  reducer,
  router: routerReducer
});

const store = createStore(reducers,
  routerReducer,
  applyMiddleware(thunk,middleware))

ReactDOM.render(
  <Provider store={store}>
      <ConnectedRouter history = {createHashHistory()}>
        <div>
            <Route exact path='/' component={StockTable} />
            <Route exact path='/details/:symbol' component={StockDetail} />      
        </div>
      </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);