import React from 'react'
import ReactDOM from 'react-dom';
import {
    HashRouter as Router,
    Route,
} from 'react-router-dom'
import StockTable from './containers/stockTableContainer';
import StockDetail from './containers/stockDetailContainer';

export const getRoutes = (store) => {
    return (
        <Router>
            <div>
                <Route exact path='/' component={StockTable} />
                <Route exact path='/details/:symbol' component={StockDetail} />
            </div>
        </Router>
    )
}
