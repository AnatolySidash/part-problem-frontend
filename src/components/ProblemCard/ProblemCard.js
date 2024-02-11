import React from 'react';
import { Link } from 'react-router-dom';

function ProblemCard({ problem }) {

    return (
        <>
            <td className='problemcard__data'><Link className='problemcard__data-link' to={`/problems/${problem.id}`}>{problem?.problem_code}</Link></td>
            <td className='problemcard__data'>{problem?.problem}</td>
            <td className='problemcard__data'>{problem?.defect_qty}</td>
            <td className='problemcard__data'>{problem?.supplier}</td>
            <td className='problemcard__data'>{problem?.temp_cm}</td>
            <td className='problemcard__data'>{problem?.temp_cm_date}</td>
            <td className='problemcard__data'>{problem?.status}</td>
            <td className='problemcard__data'>{problem?.responsible}</td>
            <td className='problemcard__data'>{problem?.system}</td>
        </>
    )
}

export default ProblemCard;