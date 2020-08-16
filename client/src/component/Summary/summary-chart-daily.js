import React, { useState, useEffect } from "react";
import { Polar } from "react-chartjs-2";

import { TextField } from "@rmwc/textfield";
import axios from "axios";
// import "./Summary.css";
import "./summary.scss";

import formatDay from "../helperFunction/formatDay";
const today = new Date();

const ChartPolarDaily = ({ setMainDate }) => {
  const [date, setDate] = useState(formatDay(today));
  const [dailyNutrition, setDailyNutrition] = useState({});
  const [consumedDaily, setConsumedDaily] = useState({
    labels: [
      "calorie",
      "fat",
      "carb",
      "sugar",
      "protein",
      "sodium",
      "cholesterol",
      "iron",
      "calcium",
      "zinc",
      "V_a",
      "V_c",
    ],
    datasets: [
      {
        label: "Total Consumed Calorie",
        backgroundColor: [
          "rgba(232, 55, 114, 0.5)",
          "rgba(82, 187, 172, 0.5)",
          "rgba(150, 215, 247, 0.5)",
          "rgba(253, 237, 106, 0.5)",
          "rgba(154, 153, 201, 0.5)",
          "rgba(191, 147, 182, 0.5)",
          "rgba(246, 248, 255, 0.5)",
          "rgba(225, 106, 9, 0.5)",
          "rgba(198, 240, 141, 0.5)",
          "rgba(87, 74, 152, 0.5)",
          "rgba(50, 129, 247, 0.5)",
          "rgba(67, 17, 59, 0.5)",
        ],
        borderColor: "rgba(0,0,1,1)",
        borderWidth: 0.5,
        data: [80, 36, 23, 43, 25, 36, 43, 34, 52, 64, 24, 50],
      },
    ],
  });

  useEffect(() => {
    axios
      .post(
        "http://localhost:4000/user/infoDay",
        { date },
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      )
      .then((result) => {
        setDailyNutrition(result.data);
      });
    setMainDate(date);
  }, [date]);

  useEffect(() => {
    setConsumedDaily((prevState) => {
      prevState.datasets[0].data = Object.values(dailyNutrition);
      return { ...prevState };
    });
  }, [dailyNutrition]);

  return (
    <div className='heightSizing'>
      <h1>Daily Nutrition Requirements (%)</h1>
      <Polar
        data={consumedDaily}
        width={700}
        height={515}
        options={{
          resposive: false,
          title: {
            display: false,
            text: "Daily Nutrition",
            fontSize: "50px",
          },
          legend: {
            display: true,
            position: "right",
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  min: 0, // 스케일에 대한 최솟갓 설정, 0 부터 시작
                  stepSize: 1, // 스케일에 대한 사용자 고정 정의 값
                },
              },
            ],
          },
          maintainAspectRatio: true, // false로 설정 시 사용자 정의 크기에 따라 그래프 크기가 결정됨.
        }}
      />
      <div className='chart__datepicker'>
        <TextField
          className='center'
          selected={date}
          onChange={(e) => setDate(e.target.value)}
          label='Date'
          type='date'
          outlined='false'
          // style={{ backgroundColor: "#f38181", color: "#ffffff" }}
        />
      </div>
    </div>
  );
};

export default ChartPolarDaily;
