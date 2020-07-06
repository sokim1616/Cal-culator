import React, { useState, useEffect } from "react";
import ChartBarWeekly from "./summary-chart-weekly";
import ChartLineMonthly from "./summary-chart-monthly";
import ChartPolarDaily from "./summary-chart-daily";
import FoodList from "./summary-foodlist";
import SelectButton from "./summary-select-button";
import "./Summary.css";
const Summary = () => {
  const [sampleFood, setSampleFood] = useState([
    { food_name: "pasta", amount: 1, calories: 1000 },
    { food_name: "pizza", amount: 2, calories: 100 },
  ]);
  const [showDWM, setShowDWM] = useState({
    daily: true,
    weekly: false,
    monthly: false,
  });
  return (
    <div className="summary">
      <SelectButton selectDWM={setShowDWM} />
      <div className="summary-container">
        <div className="chart">
          {showDWM.daily ? (
            <ChartPolarDaily />
          ) : showDWM.weekly ? (
            <ChartBarWeekly />
          ) : (
            <ChartLineMonthly />
          )}
        </div>
        <div className="foodlist">
          <h2>언제 뭘 처먹었나.</h2>
          {/* <SelectButton selectDWM={setShowDWM} /> */}
          <FoodList food={sampleFood} />
        </div>
      </div>
    </div>
  );
};
export default Summary;
