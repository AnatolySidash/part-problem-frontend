import React from 'react';
import SupplierCard from '../../SupplierCard/SupplierCard';
import TopProblemCard from '../../TopProblemCard/TopProblemCard';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ru } from "date-fns/locale/ru";
import { useOutletContext } from 'react-router-dom';

function StorageProblem() {

   const [dateRange, setDateRange] = React.useState([null, null]);
   const [startDate, endDate] = dateRange;

   const problems = useOutletContext();

   const getDatesBetween = (startDate, endDate) => {
      let dates = [];
      let currentDate = new Date(startDate);
      while (currentDate <= endDate) {
         dates.push(new Date(currentDate).toISOString().slice(0, 10));
         currentDate.setDate(currentDate.getDate() + 1);
      }
      return dates;
   };

   const dateArray = getDatesBetween(startDate, endDate);

   const dateFilteredList = () => {
      if (startDate !== null && endDate !== null) {
         let filteredProblems = problems.filter(item => dateArray.includes(item.occur_date.slice(0, 10)));
         return filteredProblems;
      }
      return problems;
   }

   const storageProblemList = dateFilteredList().filter(item => item.reason === 'Хранение');

   const defectByPart = storageProblemList.reduce((newArray, element) => {
      newArray[element.part_name] = (newArray[element.part_name] || 0) + parseInt(element.defect_qty);
      return newArray
   }, {});

   const problemByPart = storageProblemList.reduce((newArray, element) => {
      newArray[element.part_name] = (newArray[element.part_name] || 0) + element.problem_code.length / 5;
      return newArray
   }, {});

   const problemList = Object.entries(problemByPart);
   const supplierProblemList = problemList.map(function (item) {
      return {
         supplier: item[0],
         problem_qty: item[1]
      };
   });

   const defectList = Object.entries(defectByPart);
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
            <h2 className='problem__title'>ТОП-10 компонентов</h2>
            <div className='problems__search-block'>
               <div className='datepicker'>
                  <h3 className='datepicker__title'>Выберите период</h3>
                  <DatePicker
                     showIcon
                     selectsRange={true}
                     startDate={startDate}
                     endDate={endDate}
                     locale={ru}
                     dateFormat="dd/MM/yyyy"
                     showWeekNumbers
                     onChange={(update) => {
                        setDateRange(update);
                     }}
                     isClearable={true}
                  />
               </div>
            </div>
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
                     {storageProblemList.sort((a, b) => parseInt(b.defect_qty) - parseInt(a.defect_qty)).slice(0, 3).map((problem, index) => (
                        <TopProblemCard key={index} problem={problem} />
                     ))}
                  </li>
               </ul>
            </div>
         </div>
      </article >
   )
}

export default StorageProblem;