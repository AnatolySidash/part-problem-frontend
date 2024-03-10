import React from 'react';
import BarChart from '../../Charts/BarChart';
import { useLoaderData } from 'react-router-dom';
import { getProblemData } from '../../../utils/MainApi';

export function loader() {
   return getProblemData();
}

function ProblemBySystem() {

   const problems = useLoaderData();

   const storageProblemList = problems.filter(item => item.reason === 'Хранение');
   const partProblemList = problems.filter(item => item.reason === 'Поставщик');

   const storageDefectBySystem = storageProblemList.reduce((newArray, element) => {
      newArray[element.system] = (newArray[element.system] || 0) + parseInt(element.defect_qty);
      return newArray
   }, {});

   const partDefectBySystem = partProblemList.reduce((newArray, element) => {
      newArray[element.system] = (newArray[element.system] || 0) + parseInt(element.defect_qty);
      return newArray
   }, {});

   const [bySystemChartData, setBySystemChartData] = React.useState({
      labels: ['Экстерьер', 'Интерьер', 'Мувинг', 'Шасси', 'Электрика'],
      datasets: [
         {
            label: "Дефекты поставщика",
            data: partDefectBySystem,
            backgroundColor: [
               'lightgray',
            ]
         },
         {
            label: "Дефекты хранения",
            data: storageDefectBySystem,
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
               <h2 className='analysis__title'>Дефекты по системам</h2>
               <BarChart chartData={bySystemChartData} />
            </li>
         </ul>
      </article >
   )
}

export default ProblemBySystem;