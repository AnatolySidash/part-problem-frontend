import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { getProblemData } from '../../utils/MainApi';
import ProblemCard from '../ProblemCard/ProblemCard';
// import { Link } from 'react-router-dom';

export function loader() {
    return getProblemData();
}

function Problems() {

    const problems = useLoaderData();

    return (
        <section className="problems">
            <div className='problems__container'>
                <h1 className='problems__title'>Список проблем</h1>
                <table className='problems__table'>
                    <thead className='problems__table-head'>
                        <tr className='problems__table-row'>
                            <th scope='col' className='problems__table-data'>Номер</th>
                            <th scope='col' className='problems__table-data'>Описание</th>
                            <th scope='col' className='problems__table-data'>Количество</th>
                            <th scope='col' className='problems__table-data'>Поставщик</th>
                            <th scope='col' className='problems__table-data'>Временные меры</th>
                            <th scope='col' className='problems__table-data'>Дата внедрения</th>
                            <th scope='col' className='problems__table-data'>Статус</th>
                            <th scope='col' className='problems__table-data'>Ответственный</th>
                            <th scope='col' className='problems__table-data'>Система</th>
                        </tr>
                    </thead>
                    <tbody>
                        {problems.map((problem) => (
                            <tr key={problem.id} className='problems__item'>
                                <ProblemCard
                                    problem={problem}
                                />
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section >
    )
}

export default Problems;