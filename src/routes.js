import React from 'react'
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router'
import StockTable from './containers/stockTableContainer;

export const getRoutes = (store) => {

    <Router>
        <Route exact path ='/' component ={StockTable}/>
    </Router>
  }
