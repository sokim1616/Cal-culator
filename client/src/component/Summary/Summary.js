import React from "react";
import ChartBarWeekly from "./summary-chart-weekly";
import ChartLineMonthly from "./summary-chart-monthly";
import ChartPolarDaily from "./summary-chart-daily";
import FoodList from "./summary-foodlist";
import SelectButton from "./summary-select-button";
import "./Summary.css";

const Summary = () => {
  return (
    <div className='summary-container'>
      <div>
        <ChartPolarDaily />
      </div>
      <div>
        <ChartBarWeekly />
      </div>
      <div>
        <ChartLineMonthly />
      </div>
      <div>
        <FoodList />
      </div>
      <span>
        <SelectButton />
      </span>
    </div>
  );
};

export default Summary;
