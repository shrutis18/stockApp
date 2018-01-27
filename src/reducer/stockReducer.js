import { constants } from '../actions/stockActions'
const initialState = {}

export const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case constants.FETCH_BATCH_STOCKS: {
            return Object.assign({}, state, {
                batchStocks: action.batchStockes
            })
        }
        case constants.FETCH_BATCH_STOCKS_DETAILS: {
            return Object.assign({}, state, {
                batchStockDetail: action.batchStockeDetail
            })
        }
        case constants.BATCH_STOCKS_ERROR: {
            return Object.assign({}, state, {
                error
            })
        }
        default: return state
    }
}