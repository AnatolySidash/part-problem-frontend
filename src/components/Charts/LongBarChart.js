import React from "react";
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto';

function BarChart({ chartData }) {
   return (
      <div className="chart__container" style={{ maxHeight: 250 }}>
         <Bar data={chartData} options={{
            plugins: {
               legend: {
                  display: false,
               }
            },
            scales: {
               x: {
                  ticks: {
                     font: {
                        size: 11,
                     }
                  }
               }
            },
            maintainAspectRatio: true,
            responsive: true,
            aspectRatio: 5
         }} />
      </div>
   )
}

export default BarChart