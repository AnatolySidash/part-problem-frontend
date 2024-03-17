import React from 'react';
import TopProblemCard from '../TopProblemCard/TopProblemCard';
import { useOutletContext } from 'react-router-dom';

function CretaModel() {

   const problems = useOutletContext();

   const partProblemList = problems.filter(item => item.reason === 'Поставщик');

   const cretaProblemList = partProblemList.filter(item => item.model === 'SU2r');

   return (
      <article className='problem__data'>
         <div className='problem__container problem__container_model'>
            <h2 className='problem__title'>ТОП-3 проблемы</h2>
            <div className='problem__block'>
               <ul className='problem__list'>
                  <li className='problem__item'>
                     {cretaProblemList.sort((a, b) => parseInt(b.defect_qty) - parseInt(a.defect_qty)).slice(0, 3).map((problem, index) => (
                        <TopProblemCard key={index} problem={problem} />
                     ))}
                  </li>
               </ul>
            </div>
         </div>
      </article >
   )
}

export default CretaModel;