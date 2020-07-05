import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import getLastDayOfMonth from "../helperFunction/getLastDayOfMonth";

// let today = new Date("2020-02-02");
// const dayCount = getLastDayOfMonth(today.getMonth() + 1, today.getFullYear());
// let currentDay = 1;
// const dayArray = [];
// while (currentDay <= dayCount) {
//   dayArray.push(String(currentDay));
//   currentDay++;
// }

const ChartLineMonthly = ({ monthly }) => {
  const [dayArray, setDayArray] = useState([]);
  const [consumedMonthly, setConsumedMonthly] = useState({
    labels: dayArray,
    datasets: [
      {
        label: "Calorie Consumed",
        backgroundColor: "rgba(144, 193, 227, 0.5)",
        borderColor: "rgba(0,0,0,0.5)",
        borderWidth: 2,
        data: Object.values(monthly),
      },
      {
        label: "Calorie suggested",
        backgroundColor: "rgba(0, 0, 0, 0)",
        borderColor: "rgba(235, 146, 133, 1)",
        borderWidth: 2,
        data: Object.values(monthly).map((el) => 100),
      },
    ],
  });

  useEffect(() => {
    setConsumedMonthly((prevState) => {
      let numberOfDays = Object.keys(monthly).length;
      let count = 1;
      const dayArr = [];
      while (count <= numberOfDays) {
        dayArr.push(String(count));
        count++;
      }
      prevState.labels = dayArr;
      prevState.datasets[0].data = Object.values(monthly);
      prevState.datasets[1].data = Object.values(monthly).map(() => 100);
      return { ...prevState };
    });
  }, [monthly]);

  return (
    <div>
      <Line
        data={consumedMonthly}
        width={10}
        height={200}
        options={{
          title: {
            display: true,
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
          maintainAspectRatio: false, // false로 설정 시 사용자 정의 크기에 따라 그래프 크기가 결정됨.
        }}
      />
    </div>
  );
};

export default ChartLineMonthly;
