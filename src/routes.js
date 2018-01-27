import React from 'react'
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'
import StockTable from './containers/stockTableContainer';
import StockDetail from './containers/stockDetailContainer';

export const getRoutes = (store) => {
 return(
     <Router>
    <div>
        <Route exact path ='/' component ={StockTable}/>
        <Route  path ='/details' component ={StockDetail}/>
    </div>
    </Router>
    )
  }
