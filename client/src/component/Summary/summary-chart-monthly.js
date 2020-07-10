import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { TextField } from "@rmwc/textfield";
import axios from "axios";
// import "./Summary.css";
import "./summary.scss";

const ChartLineMonthly = () => {
  const [dailyCalorie, setDailyCalorie] = useState("");
  const [month, setMonth] = useState("2020-07");
  const [monthlyNutrition, setMonthlyNutrition] = useState({});

  const [consumedMonthly, setConsumedMonthly] = useState({
    labels: [],
    datasets: [
      {
        label: "Calorie Consumed",
        backgroundColor: "rgba(144, 193, 227, 0.5)",
        borderColor: "rgba(0,0,0,0.5)",
        borderWidth: 2,
        data: Object.values(monthlyNutrition),
      },
      {
        label: "Calorie suggested",
        backgroundColor: "rgba(0, 0, 0, 0)",
        borderColor: "rgba(235, 146, 133, 1)",
        borderWidth: 2,
        data: Object.values(monthlyNutrition).map((el) => 100),
      },
    ],
  });

  useEffect(() => {
    axios
      .get("http://13.209.47.155:4000/user/dailyCalorie", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      })
      .then((result) => {
        setDailyCalorie(result.data);
      });
  }, []);

  useEffect(() => {
    axios
      .post(
        "http://13.209.47.155:4000/user/infoMonth",
        { date: month },
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      )
      .then((result) => {
        setMonthlyNutrition(result.data);
      });
  }, [month]);

  useEffect(() => {
    setConsumedMonthly((prevState) => {
      let numberOfDays = Object.keys(monthlyNutrition).length;
      let count = 1;
      const dayArr = [];
      while (count <= numberOfDays) {
        dayArr.push(String(count));
        count++;
      }
      prevState.labels = dayArr;
      prevState.datasets[0].data = Object.values(monthlyNutrition);
      prevState.datasets[1].data = Object.values(monthlyNutrition).map(
        () => dailyCalorie
      );
      return { ...prevState };
    });
  }, [monthlyNutrition, dailyCalorie]);

  return (
    <div className='heightSizing'>
      <h1>Monthly Calorie Report</h1>
      <Line
        data={consumedMonthly}
        width={700}
        height={515}
        options={{
          responsive: false,
          title: {
            display: false,
            text: "Monthly Calorie Report",
            fontSize: 25,
          },
          legend: {
            display: false,
            position: "right",
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  min: 0, // 스케일에 대한 최솟갓 설정, 0 부터 시작
                  stepSize: 5, // 스케일에 대한 사용자 고정 정의 값
                },
              },
            ],
          },
          maintainAspectRatio: true, // false로 설정 시 사용자 정의 크기에 따라 그래프 크기가 결정됨.
        }}
      />
      <div className='chart__datepicker'>
        <TextField
          selected={month}
          onChange={(e) => setMonth(e.target.value)}
          label='Month'
          type='month'
          outlined='false'
        />
      </div>
    </div>
  );
};

export default ChartLineMonthly;
