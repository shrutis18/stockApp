import React from 'react';

export default class StockDetail extends React.Component {

    componentWillMount() {
        this.props.fetchBatchStockDetail()
    }
    render() {
        const details =[]
        if(this.props.batchStockDetail){
            details.push(<tr className = "tr-style"> open {this.props.batchStockDetail['1. open']} </tr> )
            details.push(<tr className = "tr-style"> high {this.props.batchStockDetail['2. high']} </tr> )
            details.push(<tr className = "tr-style"> low {this.props.batchStockDetail['3. low']} </tr> )
            details.push(<tr className = "tr-style"> close {this.props.batchStockDetail['4. close']} </tr> )
            details.push(<tr className = "tr-style"> volume {this.props.batchStockDetail['5. volume']} </tr> )
        }
        return (
                <div className = "detail-header">
                <table className = "detail-table">
                {details}
                </table>
                </div>
            
        )
    }
}