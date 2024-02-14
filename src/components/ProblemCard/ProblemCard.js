import React from 'react';
import { Link } from 'react-router-dom';

function ProblemCard({ problem }) {

    return (
        <>
            <td className='problemcard__data'><Link className='problemcard__data-link' to={`/problems/${problem.id}`}>{problem?.problem_code}</Link></td>
            <td className='problemcard__data'>{problem?.occur_date.slice(0, 10)}</td>
            <td className='problemcard__data'>{problem?.model}</td>
            <td className='problemcard__data'>{problem?.part_name}</td>
            <td className='problemcard__data'>{problem?.problem}</td>
            <td className='problemcard__data'>{problem?.defect_qty}</td>
            <td className='problemcard__data'>{problem?.reason}</td>
            <td className='problemcard__data'>{problem?.supplier}</td>
            <td className='problemcard__data'>{problem?.status}</td>
            <td className='problemcard__data'>{problem?.responsible}</td>
            <td className='problemcard__data'>{problem?.system}</td>
        </>
    )
}

export default ProblemCard;