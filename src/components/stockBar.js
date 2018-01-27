import React from 'react';

export default class StockBar extends React.Component {
    render() {
        const symbol = this.props.stock['1. symbol']
        const price = this.props.stock['2. price']
        return (
            <div>
                <button> {symbol} {price} </button>
            </div>
        )
    }
}