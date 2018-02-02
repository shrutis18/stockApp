import { push } from 'react-router-redux';

const navigateToDetails = (symbol) => {
    return push(`/details/${symbol}`)
}

const batchStockFetched = (batchStockes) => {
    return {
        type: 'FETCH_BATCH_STOCKS',
        batchStockes
    }
}

const batchStockDetailFetched = (batchStockeDetail) => {
    return {
        type: 'FETCH_BATCH_STOCKS_DETAILS',
        batchStockeDetail
    }
}

function fetchBatchStocksAsync() {
    return dispatch => {
        return fetch(`https://www.alphavantage.co/query?function=BATCH_STOCK_QUOTES&symbols=MSFT,FB,AAPL&apikey=demo`)
            .then(response => response.json())
            .then(json => dispatch(batchStockFetched(json['Stock Quotes'])))
    }
}

function fetchBatchStockDetailAsync(symbol) {
    return dispatch => {
        return fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=2FZIVBF4TZA5XLXB`)
            .then(response => response.json())
            .then(json => {
                dispatch(batchStockDetailFetched(json['Time Series (Daily)']['2018-01-26']))
            }
            )
    }
}

export const stockActions = {
    fetchBatchStocksAsync,
    batchStockFetched,
    navigateToDetails,
    fetchBatchStockDetailAsync,
    batchStockDetailFetched

}

export const constants = {
    FETCH_BATCH_STOCKS: 'FETCH_BATCH_STOCKS',
    FETCH_BATCH_STOCKS_DETAILS: 'FETCH_BATCH_STOCKS_DETAILS'
}

