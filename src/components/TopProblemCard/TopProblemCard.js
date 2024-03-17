import React from 'react';
import TopProblemImagePreview from '../TopProblemImagePreview/TopProblemImagePreview';
import { Link } from 'react-router-dom';

function TopProblemCard({ problem }) {

   return (
      <article className='topproblemcard'>
         <h3 className='topproblemcard__title'><Link className='topproblemcard__data-link' to={`/problems/${problem.id}`}>{problem.model + ' ' + problem.part_name + ' - ' + problem.problem}</Link></h3>
         <ul className='topproblemcard__list'>
            <li className='topproblemcard__item'>
               <div className='topproblemcard__image'>
                  <TopProblemImagePreview file={problem.image_1} />
               </div>
            </li>
            <li className='topproblemcard__item'>
               <p className='topproblemcard__data'>Количество дефектов: {problem.defect_qty} шт.</p>
               <p className='topproblemcard__data'>Поставщик: {problem.supplier}</p>
               <p className='topproblemcard__data'>Дата обнаружения: {problem.occur_date.slice(0, 10)}</p>
               <p className='topproblemcard__data'>Решение: {problem.action}</p>
               <p className='topproblemcard__data'>Контрмера: {problem.perm_cm}</p>
            </li>
         </ul>
      </article>
   )
}

export default TopProblemCard;