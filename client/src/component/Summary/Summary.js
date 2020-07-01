import React from 'react';
import Chart from "./Chart"
import ChartPolar from './Polar-area-chart'
const Summary = () => {

    return (
        <div className="Summary">
            <main className="Summary-main">
                <ChartPolar />
            </main>
        </div>
    )
} 

export default Summary;