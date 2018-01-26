
const batchStockFetched = (batchStockes) => {
    return {
        type: 'FETCH_BATCH_STOCKS',
        batchStockes
    }
}

function fetchBatchStocksAsync() {
console.log("insideAction")

    return dispatch => {
        return fetch(`https://www.alphavantage.co/query?function=BATCH_STOCK_QUOTES&symbols=MSFT,FB,AAPL&apikey=demo`)
            .then(response => response.json())
            .then(json => dispatch(batchStockFetched(json['Stock Quotes'])))
    }
}

export const stockActions = {
    fetchBatchStocksAsync,
    batchStockFetched
}

export const constants = {
    FETCH_BATCH_STOCKS: 'FETCH_BATCH_STOCKS'
}

