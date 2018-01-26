import React from 'react';
import StockTable from './stockTable'

export default class StockScreen extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        const {batchStocks} = this.props
        const {fetchBatchStocks} = this.props
        return(
            <StockTable batchStocks = {batchStocks} fetchBatchStocks = {fetchBatchStocks}/>
        )
    }
}