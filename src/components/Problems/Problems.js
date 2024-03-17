import React from 'react';
import ProblemList from '../ProblemList/ProblemList';
import { useOutletContext } from 'react-router-dom';

function Problems() {

    const problems = useOutletContext();

    return (
        <section className="problems">
            <div className='problems__container'>
                <ProblemList problems={problems} />
            </div>
        </section >
    )
}

export default Problems;