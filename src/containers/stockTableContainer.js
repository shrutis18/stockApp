import { stockActions } from '../actions/stockActions'

export const mapStateToProps = (state) => {
    return { batchStocks: state.batchStocks }
}
export const mapDispatchToProps = (dispatch) => {
    return {
        fetchBatchStocks: () => {
            dispatch(stockActions.fetchBatchStocksAsync())
        }
    }
}