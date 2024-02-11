import React from 'react';
import Header from '../Header/Header';
import { useLoaderData } from 'react-router-dom';
import { getProblemData } from '../../utils/MainApi';
import ProblemCard from '../ProblemCard/ProblemCard';

export function loader() {
   return getProblemData();
}

function Main() {

   const problems = useLoaderData();

   return (
      <>
        <Header />
        <main className="main">
            <section className='about'>
               <div className='about__block'>
                  <h1 className='about__title'>О системе</h1>
                  <ul>
                     <li>
                        {problems.map((problem) => (
                           <ProblemCard 
                              key={problem.id}
                              problem={problem}
                           />
                        ))}
                     </li>
                  </ul>
               </div>
            </section>
        </main >
      </>
   )
}

export default Main;