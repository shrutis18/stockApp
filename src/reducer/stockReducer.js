import { constants } from '../actions/stockActions'
const initialState = {}

export const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case constants.FETCH_BATCH_STOCKS: {
            return Object.assign({}, state, {
                batchStocks: action.batchStockes
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