import React, { useState, useEffect } from "react";
import ChartBarWeekly from "./summary-chart-weekly";
import ChartLineMonthly from "./summary-chart-monthly";
import ChartPolarDaily from "./summary-chart-daily";
import FoodList from "./summary-foodlist";
import SelectButton from "./summary-select-button";
import "./Summary.css";
import axios from "axios";
import formatDay from "../helperFunction/formatDay";
const today = new Date();

const Summary = ({ setCurrentPageIndex }) => {
  const [sampleFood, setSampleFood] = useState([
    { food_name: "pasta", amount: 1, calories: 1000 },
    { food_name: "pizza", amount: 2, calories: 100 },
  ]);

  const [date, setDate] = useState(formatDay(today));
  const [foodEaten, setFoodEaten] = useState();

  const [showDWM, setShowDWM] = useState({
    daily: true,
    weekly: false,
    monthly: false,
  });

  useEffect(() => {
    setCurrentPageIndex(2);
  }, []);

  // useEffect(() => {
  //   axios.post('http://localhost:4000/')
  // })

  return (
    <div className='summary'>
      <SelectButton selectDWM={setShowDWM} />
      <div className='summary-container'>
        <div className='chart'>
          {showDWM.daily ? (
            <ChartPolarDaily />
          ) : showDWM.weekly ? (
            <ChartBarWeekly />
          ) : (
            <ChartLineMonthly />
          )}
        </div>
        <div className='foodlist'>
          <h2>언제 뭘 먹었나.</h2>
          {/* <SelectButton selectDWM={setShowDWM} /> */}
          <FoodList food={sampleFood} />
        </div>
      </div>
    </div>
  );
};
export default Summary;
