import React from 'react';
import BarChart from '../../Charts/BarChart';
import { NavLink, Outlet, useOutletContext } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ru } from "date-fns/locale/ru";


function ProblemByModel() {

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
   const partProblemList = dateFilteredList().filter(item => item.reason === 'Поставщик');

   const storageDefectByModel = storageProblemList.reduce((newArray, element) => {
      newArray[element.model] = (newArray[element.model] || 0) + parseInt(element.defect_qty);
      return newArray
   }, {});

   const partDefectByModel = partProblemList.reduce((newArray, element) => {
      newArray[element.model] = (newArray[element.model] || 0) + parseInt(element.defect_qty);
      return newArray
   }, {});

   const [byModelChartData, setByModelChartData] = React.useState({
      labels: ['HCr', 'FB', 'SU2r'],
      datasets: [
         {
            label: "Дефекты хранения",
            data: storageDefectByModel,
            backgroundColor: [
               'lightgray',
            ]
         },
         {
            label: "Дефекты поставщика",
            data: partDefectByModel,
            backgroundColor: [
               'skyblue',
            ]
         }
      ],
   })

   React.useEffect(() => {
      setByModelChartData({
         labels: ['HCr', 'FB', 'SU2r'],
         datasets: [
            {
               label: "Дефекты хранения",
               data: storageDefectByModel,
               backgroundColor: [
                  'lightgray',
               ]
            },
            {
               label: "Дефекты поставщика",
               data: partDefectByModel,
               backgroundColor: [
                  'skyblue',
               ]
            }
         ],
      })
   }, [endDate])


   return (
      <>
         <article className='analysis__data'>
            <ul className='analysis__list'>
               <li className='analysis__item analysis__item_long'>
                  <h2 className='analysis__title'>Дефекты по моделям</h2>
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
                  <BarChart chartData={byModelChartData} />
               </li>
            </ul>
         </article >
         <nav className="models__nav">
            <NavLink end className={({ isActive }) => isActive ? 'models__link active' : 'models__link'} to='.'>HCr</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'models__link active' : 'models__link'} to='rio'>FB</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'models__link active' : 'models__link'} to='creta'>SU2r</NavLink>
         </nav >
         <Outlet context={dateFilteredList()} />
      </>
   )
}

export default ProblemByModel;