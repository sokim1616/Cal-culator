import React from 'react';
import { Polar } from 'react-chartjs-2';

const state = {
    labels: ['Mon', 'Tue', 'Wed',
             'Thu', 'Fri', 'Sat', "Sun"],
    datasets: [
      {
        label: 'Total Consumed Calorie',
        backgroundColor: ['rgba(200,192,192,1)','rgba(50,23,23,12)'],
        borderColor: 'rgba(0,0,1,1)',
        borderWidth: 0.5,
        data: [100, 80, 36, 23, 43, 25, 36]
      }
    ]
  }

const ChartPolar = () => {

    return (
        <div>
        <Polar
          data={state}
          width={50}
          height={200}
          options={{
            title:{
              display:true,
              text:'Weekly Report',
              fontSize:25
            },
            legend:{
              display:true,
              position:'right'
            },
            scales: {
                yAxes: [{
                    ticks: { 
                        min: 0, // 스케일에 대한 최솟갓 설정, 0 부터 시작
                        stepSize: 1, // 스케일에 대한 사용자 고정 정의 값
                    }
                }]
            },
            maintainAspectRatio: false // false로 설정 시 사용자 정의 크기에 따라 그래프 크기가 결정됨.
        }
          }
        />
      </div>
    )
}

export default ChartPolar;