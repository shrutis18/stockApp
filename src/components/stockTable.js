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
                rows.push(<StockBar stock={element} key={element['1. symbol']} />)
            });
        }
        return (
            <table border='1px'>
                {rows}
            </table>
        )
    }
}