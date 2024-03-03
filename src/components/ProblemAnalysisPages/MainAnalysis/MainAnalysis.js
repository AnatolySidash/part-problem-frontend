import React from 'react';
import LongBarChart from '../../Charts/LongBarChart';
import { ProblemData } from '../../../utils/Database';
import DoughnutChart from '../../Charts/DoughnutChart';

function MainAnalysis() {

   const defectByMonth = ProblemData.reduce((newArray, element) => {
      newArray[new Date(element.occur_date).toLocaleString('ru-RU', { month: 'long' })] = (newArray[new Date(element.occur_date).toLocaleString('ru-RU', { month: 'long' })] || 0) + parseInt(element.defect_qty);
      return newArray
   }, {});

   const defectByReason = ProblemData.reduce((newArray, element) => {
      newArray[element.reason] = (newArray[element.reason] || 0) + parseInt(element.defect_qty);
      return newArray
   }, {});

   const [byMonthChartData, setByMonthChartData] = React.useState({
      labels: ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'],
      datasets: [
         {
            label: "Количество дефектов",
            data: defectByMonth,
         }
      ],
   })

   console.log(defectByMonth)

   const [byReasonChartData, setByReasonChartData] = React.useState({
      labels: ['Хранение', 'Поставщик'],
      datasets: [
         {
            label: "Количество дефектов",
            data: Object.values(defectByReason),
            backgroundColor: [
               'skyblue',
               'lightgray',
            ]
         },
      ],
   })


   return (
      <article className='analysis__data'>
         <ul className='analysis__list'>
            <li className='analysis__item analysis__item_long'>
               <h2 className='analysis__title'>Дефекты по месяцам</h2>
               <LongBarChart chartData={byMonthChartData} />
            </li>
            <li className='analysis__item'>
               <h2 className='analysis__title'>Дефекты по причинам</h2>
               <DoughnutChart chartData={byReasonChartData} />
            </li>
         </ul>
      </article >
   )
}

export default MainAnalysis;