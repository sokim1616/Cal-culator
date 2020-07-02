import React from 'react';
import Chart from "./Chart"
import ChartPolar from './Polar-area-chart'
import './Summary.css'

const Summary = () => {

    return (
        <div className="Summary">
            <div className="chart-polar"> 
                <ChartPolar />
            </div>
            <div className="chart-bar">
                <Chart />
            </div>
        </div>
    )
} 

export default Summary;