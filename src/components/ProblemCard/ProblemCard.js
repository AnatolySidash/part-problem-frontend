import React from 'react';

function ProblemCard({ problem }) {

   return (
      <article className="toolscard">
        <div className='toolscard__info'>
            <ul className='toolscard__list'>
                <li className='toolscard__item'>
                    <h3 className='toolscard__subtitle'>Номер проблемы:</h3>
                    <p className='toolscard__data'>{problem.problem_code}</p>
                </li>
                <li className='toolscard__item'>
                    <h3 className='toolscard__subtitle'>Описание:</h3>
                    <p className='toolscard__data'>{problem.problem}</p>
                </li>
                <li className='toolscard__item'>
                    <h3 className='toolscard__subtitle'>Количество:</h3>
                    <p className='toolscard__data'>{problem.defect_qty}</p>
                </li>
                <li className='toolscard__item'>
                    <h3 className='toolscard__subtitle'>Поставщик:</h3>
                    <p className='toolscard__data'>{problem.supplier}</p>
                </li>
                <li className='toolscard__item'>
                    <h3 className='toolscard__subtitle'>Временные меры:</h3>
                    <p className='toolscard__data'>{problem.temp_cm}</p>
                </li>
                <li className='toolscard__item'>
                    <h3 className='toolscard__subtitle'>Постоянные меры:</h3>
                    <p className='toolscard__data'>{problem.perm_cm}</p>
                </li>
            </ul>
        </div>
      </article >
   )
}

export default ProblemCard;