import React from 'react';
import TopProblemCard from '../TopProblemCard/TopProblemCard';
import { useOutletContext } from 'react-router-dom';


function InteriorSystem() {

   const problems = useOutletContext();

   const interiorProblemList = problems.filter(item => item.system === 'Интерьер');

   return (
      <article className='problem__data'>
         <div className='problem__container problem__container_model'>
            <h2 className='problem__title'>ТОП-3 проблемы</h2>
            <div className='problem__block'>
               <ul className='problem__list'>
                  <li className='problem__item'>
                     {interiorProblemList.sort((a, b) => parseInt(b.defect_qty) - parseInt(a.defect_qty)).slice(0, 3).map((problem, index) => (
                        <TopProblemCard key={index} problem={problem} />
                     ))}
                  </li>
               </ul>
            </div>
         </div>
      </article >
   )
}

export default InteriorSystem;