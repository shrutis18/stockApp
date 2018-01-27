import React from 'react';
import StockBar from './stockBar'

export default class StockTable extends React.Component {

    componentWillMount() {
        this.props.fetchBatchStocks()
    }

    render() {
        const rows = [];
        if (this.props.batchStocks) {
            this.props.batchStocks.forEach(element => {
                rows.push(<div key={element['1. symbol']}>  <button className="button-stock" onClick={() => this.props.displayDetails(element['1. symbol'])}>{element['1. symbol']}    {element['2. price']}</button></div>)
            });
        }

        return (
            <div className="main-header">
                <h1>Stocks</h1>
                <div className="header">
                    <table className="stock-table">
                        {rows}
                    </table>
                </div>
            </div>
        )
    }
}