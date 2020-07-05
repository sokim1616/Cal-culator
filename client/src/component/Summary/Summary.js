import React, { useState, useEffect } from "react";
import ChartBarWeekly from "./summary-chart-weekly";
import ChartLineMonthly from "./summary-chart-monthly";
import ChartPolarDaily from "./summary-chart-daily";
import FoodList from "./summary-foodlist";
import SelectButton from "./summary-select-button";
import "./Summary.css";
import { TextField } from "@rmwc/textfield";
import axios from "axios";

import formatDay from "../helperFunction/formatDay";
import "../helperFunction/getTodaysWeekNum";

const today = new Date();
const thisWeek = today.getWeekNumber();

const Summary = () => {
  const [sampleFood, setSampleFood] = useState([
    { food_name: "pasta", amount: 1, calories: 1000 },
    { food_name: "pizza", amount: 2, calories: 100 },
  ]);
  const [dailyCalorie, setDailyCalorie] = useState("");
  const [dailyNutrition, setDailyNutrition] = useState({});
  const [weeklyNutrition, setWeeklyNutrition] = useState({});
  const [monthlyNutrition, setMonthlyNutrition] = useState({});
  const [date, setDate] = useState(formatDay(today));
  const [week, setWeek] = useState(`2020-W${thisWeek}`);
  const [month, setMonth] = useState("2020-07");

  useEffect(() => {
    axios
      .get("http://localhost:4000/user/dailyCalorie", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        // withCredentials: true
      })
      .then((result) => {
        setDailyCalorie(result.data);
      });
  });

  useEffect(() => {
    axios
      .post(
        "http://localhost:4000/user/infoDay",
        { date },
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          // withCredentials: true
        }
      )
      .then((result) => {
        setDailyNutrition(result.data);
      });
  }, [date]);

  useEffect(() => {
    axios
      .post(
        "http://localhost:4000/user/infoWeek",
        { date: week },
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          // withCredentials: true
        }
      )
      .then((result) => {
        setWeeklyNutrition(result.data);
      });
  }, [week]);

  useEffect(() => {
    axios
      .post(
        "http://localhost:4000/user/infoMonth",
        { date: month },
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          // withCredentials: true
        }
      )
      .then((result) => {
        setMonthlyNutrition(result.data);
      });
  }, [month]);

  return (
    <div className='summary-container'>
      <div>
        <ChartPolarDaily daily={dailyNutrition} />
      </div>
      <div>
        <TextField
          selected={date}
          onChange={(e) => setDate(e.target.value)}
          label='date'
          type='date'
        />
      </div>
      <div>
        <ChartBarWeekly weekly={weeklyNutrition} />
      </div>
      <div>
        <TextField
          selected={week}
          onChange={(e) => setWeek(e.target.value)}
          label='week'
          type='week'
        />
      </div>
      <div>
        <ChartLineMonthly
          monthly={monthlyNutrition}
          dailyCalorie={dailyCalorie}
        />
      </div>
      <div>
        <TextField
          selected={month}
          onChange={(e) => setMonth(e.target.value)}
          label='month'
          type='month'
        />
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
