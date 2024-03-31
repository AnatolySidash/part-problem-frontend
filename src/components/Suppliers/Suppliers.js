import React from 'react';
import { useOutletContext, Outlet } from 'react-router-dom';
import SuppliersNameCard from '../SuppliersNameCard/SuppliersNameCard';

function Suppliers() {

   const problems = useOutletContext();

   const partProblemList = problems.filter(item => item.reason === 'Поставщик');

   const defectBySupplier = partProblemList.reduce((newArray, element) => {
      newArray[element.supplier] = (newArray[element.supplier] || 0) + parseInt(element.defect_qty);
      return newArray;
   }, {});

   const problemBySupplier = partProblemList.reduce((newArray, element) => {
      newArray[element.supplier] = (newArray[element.supplier] || 0) + element.problem_code.length / 5;
      return newArray;
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
      <section className='suppliers'>
         <nav className='suppliers__nav'>
            <ul className='suppliers__navlist'>
               <li className='suppliers__navlink'>
                  {mergedList.sort((a, b) => parseInt(b.defect_qty) - parseInt(a.defect_qty)).map((supplier, index) => (
                     <SuppliersNameCard key={index} supplier={supplier} />
                  ))}
               </li>
            </ul>
         </nav>
         <Outlet context={problems} />
      </section>
   )
}

export default Suppliers;