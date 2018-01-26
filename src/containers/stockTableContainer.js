import { stockActions } from '../actions/stockActions'
import StockTable from '../components/stockTable'
import {connect} from 'react-redux'

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

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StockTable)