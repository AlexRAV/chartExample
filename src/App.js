import React from 'react';
import logo from './logo.svg';
import { Bar } from 'react-chartjs-2';
import './App.css';

function App() {
  return (
    <div className="App">
      <Bar
        data={{
          labels: ['Первый квартал', 'Последний квартал'],
          datasets: [{
            label: 'Доступно к вычету',
            data: [{x: 0, y: 10}, {x: 0, y: 1}],
            backgroundColor: [
                'rgba(255, 99, 132, 0.8)',
                'rgba(255, 99, 132, 0.8)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1
          },
          {
            label: 'Начислено',
            data: [{x: 1, y: 3}, {x: 1, y: 4}],
            backgroundColor: [
                'rgba(153, 102, 255, 0.8)',
                'rgba(153, 102, 255, 0.8)'
            ],
            borderColor: [
              'rgba(153, 102, 255, 1)',
              'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        },
        {
          label: 'К уплате',
          data: [{x: 1, y: 8}, {x: 1, y: 5}],
          backgroundColor: [
              'rgba(255, 159, 64, 0.8)',
              'rgba(255, 159, 64, 0.8)'
          ],
          borderColor: [
            'rgba(255, 159, 64, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
      }]
        }}
        width={100}
        height={50}
        options={{
          onClick: function(e) {
            // так можно определить на какой из секторов кликнули
            console.log(this.scales[`x-axis-0`].getValueForPixel(e.x));
            console.log(this.scales[`y-axis-0`].getValueForPixel(e.y));
          },
          scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
          }
        }}
      />
    </div>
  );
}

export default App;
