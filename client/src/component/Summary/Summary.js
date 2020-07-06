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
  const [dailyEaten, setDailyEaten] = useState([]);
  const [showDWM, setShowDWM] = useState({
    daily: true,
    weekly: false,
    monthly: false,
  });

  useEffect(() => {
    setCurrentPageIndex(2);
  }, []);

  useEffect(() => {
    let date = formatDay(today);
    axios
      .post(
        "http://localhost:4000/user/dailyEatenItems",
        { date },
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          // withCredentials: true,
        }
      )
      .then((result) => {
        setDailyEaten(result.data);
      });
  }, []);

  return (
    <div className='summary-container'>
      <div className='chart'>
        {showDWM.daily ? (
          <ChartPolarDaily setDailyEaten={setDailyEaten} />
        ) : showDWM.weekly ? (
          <ChartBarWeekly />
        ) : (
          <ChartLineMonthly />
        )}
      </div>
      <div className='foodlist'>
        <FoodList
          className='spacer'
          food={dailyEaten}
          setDailyEaten={setDailyEaten}
        />
        <SelectButton selectDWM={setShowDWM} />
      </div>
    </div>
  );
};
export default Summary;
