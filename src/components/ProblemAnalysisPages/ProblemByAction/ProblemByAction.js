import React from 'react';
import BarChart from '../../Charts/BarChart';
import { useLoaderData } from 'react-router-dom';
import { getProblemData } from '../../../utils/MainApi';

export function loader() {
   return getProblemData();
}

function ProblemByAction() {

   const problems = useLoaderData();

   const storageProblemList = problems.filter(item => item.reason === 'Хранение');
   const partProblemList = problems.filter(item => item.reason === 'Поставщик');

   const storageDefectByAction = storageProblemList.reduce((newArray, element) => {
      newArray[element.action] = (newArray[element.action] || 0) + parseInt(element.defect_qty);
      return newArray
   }, {});

   const partDefectByAction = partProblemList.reduce((newArray, element) => {
      newArray[element.action] = (newArray[element.action] || 0) + parseInt(element.defect_qty);
      return newArray
   }, {});

   const [byActionChartData, setByActionChartData] = React.useState({
      labels: ['Возврат поставщику', 'Возврат на линию', 'Утилизация', 'Другое'],
      datasets: [
         {
            label: "Дефекты поставщика",
            data: partDefectByAction,
            backgroundColor: [
               'lightgray',
            ]
         },
         {
            label: "Дефекты хранения",
            data: storageDefectByAction,
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
               <h2 className='analysis__title'>Дефекты по решению</h2>
               <BarChart chartData={byActionChartData} />
            </li>
         </ul>
      </article >
   )
}

export default ProblemByAction;