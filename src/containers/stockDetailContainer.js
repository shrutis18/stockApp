import { stockActions } from '../actions/stockActions'
import StockDetail from '../components/stockDetail'
import { connect } from 'react-redux'

export const mapStateToProps = (state) => {
    return { batchStockDetail: state.reducer.batchStockDetail }
}
export const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchBatchStockDetail: () => {
            dispatch(stockActions.fetchBatchStockDetailAsync(ownProps.match.params.symbol))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StockDetail)