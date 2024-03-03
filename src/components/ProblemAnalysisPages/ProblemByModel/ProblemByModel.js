import React from 'react';
import BarChart from '../Charts/BarChart';
import { ProblemData } from '../../utils/Database';

function ProblemByModel() {

   const defectByModel = ProblemData.reduce((newArray, element) => {
      newArray[element.model] = (newArray[element.model] || 0) + parseInt(element.defect_qty);
      return newArray
   }, {});

   const [byModelChartData, setByModelChartData] = React.useState({
      labels: ['HCr', 'FB', 'SU2r'],
      datasets: [
         {
            label: "Количество дефектов",
            data: defectByModel,
         }
      ],
   })

   return (
      <article className='analysis__data'>
         <ul className='analysis__list'>
            <li className='analysis__item'>
               <h2 className='analysis__title'>Дефекты по моделям</h2>
               <BarChart chartData={byModelChartData} />
            </li>
         </ul>
      </article >
   )
}

export default ProblemByModel;