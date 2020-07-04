import React, { useState, useEffect } from "react";
import ChartBarWeekly from "./summary-chart-weekly";
import ChartLineMonthly from "./summary-chart-monthly";
import ChartPolarDaily from "./summary-chart-daily";
import FoodList from "./summary-foodlist";
import SelectButton from "./summary-select-button";
import "./Summary.css";
import axios from "axios";

const Summary = () => {
  const [sampleFood, setSampleFood] = useState([
    { food_name: "pasta", amount: 1, calories: 1000 },
    { food_name: "pizza", amount: 2, calories: 100 },
  ]);

  useEffect(() => {
    axios
      .post(
        "http://localhost:4000/user/infoDay",
        { date: "2020-07-01" },
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          // withCredentials: true
        }
      )
      .then((result) => console.log(result.data));
  }, []);
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
        <FoodList food={sampleFood} />
      </div>
      <span>
        <SelectButton />
      </span>
    </div>
  );
};

export default Summary;
