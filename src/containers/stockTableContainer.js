import { stockActions } from '../actions/stockActions'
import StockTable from '../components/stockTable'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
export const mapStateToProps = (state) => ({ batchStocks: state.reducer.batchStocks })

export const mapDispatchToProps = (dispatch) => ({
    fetchBatchStocks: () => stockActions.fetchBatchStocksAsync()(dispatch),
    displayDetails: (symbol) => dispatch(stockActions.navigateToDetails(symbol)),
})

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(StockTable));