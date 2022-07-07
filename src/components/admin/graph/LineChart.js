

import React, { useState, useEffect } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
  TimeSeriesScale
} from 'chart.js';

import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    TimeSeriesScale,
    Tooltip,
    Legend,
    TimeScale
  );

function LineChart() {
    const [chart, setChart] = useState({})

    var data = {
        // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        // labels:scales,
        datasets: [{
          label: '',
          data: [
              {x:'2022-05-30',y:24},
              {x:'2022-05-8',y:26},
              {x:'2022-05-7',y:28},
              {x:'2022-05-13',y:29},
          ],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      };

      var options = {
        maintainAspectRatio: false,
        scales: {
            x: {
                // type: 'time',
                time: {
                    unit: 'month'
                }
            }
        },
        legend: {
          labels: {
            fontSize: 25,
          },
        },
        }

  return (
    <div>
        <Line
        data={data}
        height={400}
        options={options}
        />
    </div>
  )
}

export default LineChart