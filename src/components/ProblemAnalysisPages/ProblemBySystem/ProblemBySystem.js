import React from 'react';
import BarChart from '../Charts/BarChart';
import { ProblemData } from '../../utils/Database';


function ProblemBySystem() {

   const defectBySystem = ProblemData.reduce((newArray, element) => {
      newArray[element.system] = (newArray[element.system] || 0) + parseInt(element.defect_qty);
      return newArray
   }, {});

   const [bySystemChartData, setBySystemChartData] = React.useState({
      labels: ['Экстерьер', 'Интерьер', 'Мувинг', 'Шасси', 'Электрика'],
      datasets: [
         {
            label: "Количество дефектов",
            data: defectBySystem,
         }
      ],
   })

   return (
      <article className='analysis__data'>
         <ul className='analysis__list'>
            <li className='analysis__item'>
               <h2 className='analysis__title'>Дефекты по системам</h2>
               <BarChart chartData={bySystemChartData} />
            </li>
         </ul>
      </article >
   )
}

export default ProblemBySystem;