import React from 'react';
// import { useLoaderData } from 'react-router-dom';
// import { getProblemData } from '../../utils/MainApi';
// import ProblemList from '../ProblemList/ProblemList';

// export function loader() {
//     return getProblemData();
// }

function InspectionInline() {

   //  const problems = useLoaderData();

   return (
      <section className="problems">
         <div className='problems__container'>
            <h1>Проверка на линии</h1>
         </div>
      </section >
   )
}

export default InspectionInline;