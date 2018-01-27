import { stockActions } from '../actions/stockActions'
import StockTable from '../components/stockTable'
import { connect } from 'react-redux'

export const mapStateToProps = (state) => {
    return { batchStocks: state.reducer.batchStocks }
}
export const mapDispatchToProps = (dispatch) => {
    return {
        fetchBatchStocks: () => {
            dispatch(stockActions.fetchBatchStocksAsync())
        },
        displayDetails: (symbol) => {
            dispatch(stockActions.navigateToDetails(symbol))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StockTable)