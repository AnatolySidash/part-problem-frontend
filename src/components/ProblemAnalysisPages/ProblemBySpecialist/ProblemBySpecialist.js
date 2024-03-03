import React from 'react';
import BarChart from '../../Charts/BarChart';
import { ProblemData } from '../../../utils/Database';


function ProblemBySpecialist() {

   const defectByPerson = ProblemData.reduce((newArray, element) => {
      newArray[element.responsible] = (newArray[element.responsible] || 0) + parseInt(element.defect_qty);
      return newArray
   }, {});

   const problemByPerson = ProblemData.reduce((newArray, element) => {
      newArray[element.responsible] = (newArray[element.responsible] || 0) + element.problem_code.length / 5;
      return newArray
   }, {});

   const [byPersonChartData, setByPersonChartData] = React.useState({
      labels: [['Топоров', 'Андрей'], ['Тимченко', 'Олег'], ['Кузнецов', 'Алексей'], ['Барановский', 'Дмитрий'], ['Лисицын', 'Дмитрий'], ['Лебедев', 'Евгений']],
      datasets: [
         {
            label: "Количество дефектов",
            data: Object.values(defectByPerson),
         },
      ],
   })

   const [problemByPersonChartData, setProblemByPersonChartData] = React.useState({
      labels: [['Топоров', 'Андрей'], ['Тимченко', 'Олег'], ['Кузнецов', 'Алексей'], ['Барановский', 'Дмитрий'], ['Лисицын', 'Дмитрий'], ['Лебедев', 'Евгений']],
      datasets: [
         {
            label: "Количество проблем",
            data: Object.values(problemByPerson),
         },
      ],
   })

   return (
      <article className='analysis__data'>
         <ul className='analysis__list'>
            <li className='analysis__item'>
               <h2 className='analysis__title'>Дефекты по сотрудникам</h2>
               <BarChart chartData={byPersonChartData} />
            </li>
            <li className='analysis__item'>
               <h2 className='analysis__title'>Проблемы по сотрудникам</h2>
               <BarChart chartData={problemByPersonChartData} />
            </li>
         </ul>
      </article >
   )
}

export default ProblemBySpecialist;