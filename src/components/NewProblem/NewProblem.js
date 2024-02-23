import React from 'react';
import NewProblemForm from '../NewProblemForm/NewProblemForm';

function NewProblem() {

    return (
        <section className="problemdetails">
            <h1 className="problemdetails__title">Карточка проблемы</h1>
            <NewProblemForm />
        </section >
    )
}

export default NewProblem;