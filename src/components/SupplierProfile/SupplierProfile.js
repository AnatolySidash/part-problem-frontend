import React from 'react';
import { useParams, useOutletContext } from 'react-router-dom';
import LongBarChart from '../Charts/LongBarChart';
import BarChart from '../Charts/BarChart';
import DatePicker from "react-datepicker";
import { ru } from "date-fns/locale/ru";
import { Link } from 'react-router-dom';

function SupplierProfile() {

   const [dateRange, setDateRange] = React.useState([null, null]);
   const [startDate, endDate] = dateRange;
   const problems = useOutletContext();
   const params = useParams();
   const partProblemList = problems.filter(item => item.reason === 'Поставщик');
   const supplierData = partProblemList.filter(item => item.supplier === params.name);

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
         let filteredProblems = supplierData.filter(item => dateArray.includes(item.occur_date.slice(0, 10)));
         return filteredProblems;
      }
      return supplierData;
   }

   const partDefectByMonth = supplierData.reduce((newArray, element) => {
      newArray[new Date(element.occur_date).toLocaleString('ru-RU', { month: 'long' })] = (newArray[new Date(element.occur_date).toLocaleString('ru-RU', { month: 'long' })] || 0) + parseInt(element.defect_qty);
      return newArray
   }, {});

   const [byMonthChartData, setByMonthChartData] = React.useState({
      labels: ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'],
      datasets: [
         {
            label: "Дефекты поставщика",
            data: partDefectByMonth,
            backgroundColor: [
               'lightgray',
            ]
         },
      ],
   })

   React.useEffect(() => {
      setByMonthChartData({
         labels: ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'],
         datasets: [
            {
               label: "Дефекты поставщика",
               data: partDefectByMonth,
               backgroundColor: [
                  'lightgray',
               ]
            },
         ],
      });
   }, [params])

   const partDefectByAction = dateFilteredList().reduce((newArray, element) => {
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
         }
      ],
   })

   React.useEffect(() => {
      setByActionChartData({
         labels: ['Возврат поставщику', 'Возврат на линию', 'Утилизация', 'Другое'],
         datasets: [
            {
               label: "Дефекты поставщика",
               data: partDefectByAction,
               backgroundColor: [
                  'lightgray',
               ]
            }
         ],
      })
   }, [endDate, params])


   return (
      <article className='supplierprofile'>
         <div className='supplierprofile__item'>
            <h3 className='supplierprofile__title'>Дефекты по месяцам {params.name}</h3>
            <LongBarChart chartData={byMonthChartData} />
         </div>
         <ul className='supplierprofile__list'>
            <li className='supplierprofile__data'>
               <h3 className='supplierprofile__title'>Дефекты по решению</h3>
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
               <BarChart chartData={byActionChartData} />
            </li>
            <li className='supplierprofile__data'>
               <h3 className='supplierprofile__title'>Проблемы</h3>
               {dateFilteredList().sort((a, b) => new Date(b.defect_qty) - new Date(a.defect_qty)).slice(0, 8).map((problem) => (
                  <div key={problem.id} className='problems__item'>
                     <p className='topproblemcard__title'><Link className='topproblemcard__data-link' to={`/problems/${problem.id}`}>{problem.model + ' ' + problem.part_name + ' - ' + problem.problem + ' (' + problem.defect_qty + 'шт)'}</Link></p>
                  </div>
               ))}
            </li>
         </ul>
      </article>
   )
}

export default SupplierProfile;