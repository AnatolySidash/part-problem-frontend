import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { getProblemData } from '../../../utils/MainApi';
import SupplierCard from '../../SupplierCard/SupplierCard';
import TopProblemCard from '../../TopProblemCard/TopProblemCard';

export function loader() {
   return getProblemData();
}

function SupplierProblem() {

   const problems = useLoaderData();

   const partProblemList = problems.filter(item => item.reason === 'Поставщик');

   const defectBySupplier = partProblemList.reduce((newArray, element) => {
      newArray[element.supplier] = (newArray[element.supplier] || 0) + parseInt(element.defect_qty);
      return newArray
   }, {});

   const problemBySupplier = partProblemList.reduce((newArray, element) => {
      newArray[element.supplier] = (newArray[element.supplier] || 0) + element.problem_code.length / 5;
      return newArray
   }, {});

   const problemList = Object.entries(problemBySupplier);
   const supplierProblemList = problemList.map(function (item) {
      return {
         supplier: item[0],
         problem_qty: item[1]
      };
   });

   const defectList = Object.entries(defectBySupplier);
   const supplierDefectList = defectList.map(function (item) {
      return {
         supplier: item[0],
         defect_qty: item[1]
      };
   });

   const mergedList = supplierProblemList.map((item) => {
      const matchedItem = supplierDefectList.find((obj) => obj.supplier === item.supplier);
      return { ...item, ...matchedItem };
   })

   return (
      <article className='problem__data'>
         <div className='problem__container'>
            <h2 className='problem__title'>ТОП-10 поставщиков</h2>
            <div className='problem__block'>
               <ul className='problem__list'>
                  <li className='problem__item'>
                     {mergedList.sort((a, b) => parseInt(b.defect_qty) - parseInt(a.defect_qty)).map((supplier, index) => (
                        <SupplierCard key={index} supplier={supplier} />
                     ))}
                  </li>
               </ul>
            </div>
         </div>
         <div className='problem__container'>
            <h2 className='problem__title'>ТОП-3 проблемы</h2>
            <div className='problem__block'>
               <ul className='problem__list'>
                  <li className='problem__item'>
                     {problems.sort((a, b) => parseInt(b.defect_qty) - parseInt(a.defect_qty)).slice(0, 3).map((problem, index) => (
                        <TopProblemCard key={index} problem={problem} />
                     ))}
                  </li>
               </ul>
            </div>
         </div>
      </article >
   )
}

export default SupplierProblem;