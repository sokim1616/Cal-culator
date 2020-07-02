import React from 'react';
import ChartBar from "./Chart-weekly"
import ChartPolar from './Polar-area-chart-weekly'
import FoodList from './Foodlist'
import SelectButton from './Selectbutton'
import './Summary.css'

const Summary = () => {

    return (
        <div className="summary-container">
            <div>
                <ChartPolar />
            </div>
            <div>
                <ChartBar />
            </div>
            <div>
                <FoodList />
            </div>
            <span>
                <SelectButton />
            </span>
        </div>
    )
}

export default Summary;
