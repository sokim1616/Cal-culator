import React from 'react';
import {Bar} from 'react-chartjs-2';

const state = {
    labels: ['Mon', 'Tue', 'Wed',
             'Thu', 'Fri', 'Sat', "Sun"],
    datasets: [
      {
        label: 'Total Consumed Calorie',
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [5000, 6000, 7000, 8000, 2000, 4000, 9000]
      }
    ]
  }

const Chart = () => {

    return (
        <div>
        <Bar
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
                        stepSize: 5, // 스케일에 대한 사용자 고정 정의 값
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

export default Chart;