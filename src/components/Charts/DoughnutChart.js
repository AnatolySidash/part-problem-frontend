import React from "react";
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto';

function DoughnutChart({ chartData }) {
   return (
      <div className="chart__container" style={{ maxHeight: 250 }}>
         <Doughnut data={chartData} />
      </div>
   )
}

export default DoughnutChart