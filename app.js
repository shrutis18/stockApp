import ReactDOM from 'react-dom';
import StockScreen from './src/components/stockScreen';
import React from 'react';
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reducer } from './src/reducer/stockReducer';
import { mapStateToProps, mapDispatchToProps } from './src/containers/stockTableContainer';
import { applyMiddleware } from 'redux';
import StockTable from './src/components/stockTable';


const store = createStore(reducer, applyMiddleware(thunk))
const StockTableWithStore = connect(mapStateToProps, mapDispatchToProps)(StockTable)

ReactDOM.render(
  <Provider store={store}>
    <StockTableWithStore />
  </Provider>,
  document.getElementById('root')
);