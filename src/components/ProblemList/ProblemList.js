import React from 'react';
import ProblemCard from '../ProblemCard/ProblemCard';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ru } from "date-fns/locale/ru";

function ProblemList({ problems }) {

    const [dateRange, setDateRange] = React.useState([null, null]);
    const [startDate, endDate] = dateRange;
    const [searchValue, setSearchValue] = React.useState('');
    const [problemData, setProblemData] = React.useState([]);

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

    React.useEffect(() => {
        setProblemData(dateFilteredList());
    }, [endDate])

    const handleSearchRequest = (e) => {
        setSearchValue(e.target.value)
    }

    const handleSearchClick = (event) => {
        event.preventDefault();
        const data = dateFilteredList();
        const result = data.filter(item =>
            item.model.toLowerCase().includes(searchValue.toLowerCase()) ||
            item.supplier.toLowerCase().includes(searchValue.toLowerCase()) ||
            item.status.toLowerCase().includes(searchValue.toLowerCase()) ||
            item.responsible.toLowerCase().includes(searchValue.toLowerCase()) ||
            item.system.toLowerCase().includes(searchValue.toLowerCase()));
        setProblemData(result);
    }

    return (
        <>
            <div className='problems__search-block'>
                <div className='datepicker'>
                    <h3 className='datepicker__title'>Выберите период</h3>
                    <DatePicker
                        showIcon
                        showWeekNumbers
                        locale={ru}
                        selectsRange={true}
                        startDate={startDate}
                        endDate={endDate}
                        dateFormat="dd/MM/yyyy"
                        onChange={(update) => {
                            setDateRange(update);
                        }}
                        isClearable={true}
                    />
                </div>
                <div className='problems__search'>
                    <form className='problems__search-form'>
                        <label htmlFor='search' className='problems__search-label'>Поиск
                            <input
                                id='search'
                                name='search'
                                className='problems__search-input'
                                type='text'
                                value={searchValue}
                                onChange={handleSearchRequest}
                                placeholder='Введите ваш запрос'
                                minLength={2}
                                maxLength={50}
                            >
                            </input>
                        </label>
                        <button type='button' className='problems__search-button' onClick={handleSearchClick}>Найти</button>
                    </form>
                </div>
            </div>
            <table className='problems__table'>
                <thead className='problems__table-head'>
                    <tr className='problems__table-row'>
                        <th scope='col' className='problems__table-data'>Номер</th>
                        <th scope='col' className='problems__table-data'>Дата обнаружения</th>
                        <th scope='col' className='problems__table-data'>Модель</th>
                        <th scope='col' className='problems__table-data'>Компонент</th>
                        <th scope='col' className='problems__table-data'>Описание</th>
                        <th scope='col' className='problems__table-data'>Количество</th>
                        <th scope='col' className='problems__table-data'>Причина</th>
                        <th scope='col' className='problems__table-data'>Поставщик</th>
                        <th scope='col' className='problems__table-data'>Статус</th>
                        <th scope='col' className='problems__table-data'>Ответственный</th>
                        <th scope='col' className='problems__table-data'>Система</th>
                    </tr>
                </thead>
                <tbody>
                    {problemData.sort((a, b) => new Date(b.occur_date) - new Date(a.occur_date)).map((problem) => (
                        <tr key={problem.id} className='problems__item'>
                            <ProblemCard
                                problem={problem}
                            />
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default ProblemList;