import React from 'react';
import BarChart from '../../Charts/BarChart';
import { useLoaderData } from 'react-router-dom';
import { getProblemData } from '../../../utils/MainApi';

export function loader() {
   return getProblemData();
}

function ProblemByModel() {

   const problems = useLoaderData();

   const storageProblemList = problems.filter(item => item.reason === 'Хранение');
   const partProblemList = problems.filter(item => item.reason === 'Поставщик');

   const storageDefectByModel = storageProblemList.reduce((newArray, element) => {
      newArray[element.model] = (newArray[element.model] || 0) + parseInt(element.defect_qty);
      return newArray
   }, {});

   const partDefectByModel = partProblemList.reduce((newArray, element) => {
      newArray[element.model] = (newArray[element.model] || 0) + parseInt(element.defect_qty);
      return newArray
   }, {});

   const [byModelChartData, setByModelChartData] = React.useState({
      labels: ['HCr', 'FB', 'SU2r'],
      datasets: [
         {
            label: "Дефекты хранения",
            data: storageDefectByModel,
            backgroundColor: [
               'lightgray',
            ]
         },
         {
            label: "Дефекты поставщика",
            data: partDefectByModel,
            backgroundColor: [
               'skyblue',
            ]
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