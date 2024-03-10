import React from 'react';

import ProblemCard from '../ProblemCard/ProblemCard';

function ProblemList({ problems }) {

    return (
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
                {problems.sort((a, b) => new Date(b.occur_date) - new Date(a.occur_date)).map((problem) => (
                    <tr key={problem.id} className='problems__item'>
                        <ProblemCard
                            problem={problem}
                        />
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default ProblemList;