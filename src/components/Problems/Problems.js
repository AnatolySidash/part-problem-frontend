import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { getProblemData } from '../../utils/MainApi';
import ProblemList from '../ProblemList/ProblemList';

export function loader() {
    return getProblemData();
}

function Problems() {

    const problems = useLoaderData();

    return (
        <section className="problems">
            <div className='problems__container'>
                <ProblemList problems={problems} />
            </div>
        </section >
    )
}

export default Problems;