import React from 'react';
import { NavLink, Outlet, useLoaderData } from 'react-router-dom';
import { getProblemData } from '../../utils/MainApi';

export function loader() {
    return getProblemData();
}

function ProblemsLayout() {

    const problems = useLoaderData();

    return (
        <>
            <nav className="problemslayout__nav">
                <NavLink end className={({ isActive }) => isActive ? 'problemslayout__link active' : 'problemslayout__link'} to='/problems'>Список проблем</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'problemslayout__link active' : 'problemslayout__link'} to='newproblem'>Новая проблема</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'problemslayout__link active' : 'problemslayout__link'} to='analysis'>Аналитика</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'problemslayout__link active' : 'problemslayout__link'} to='suppliers'>Поставщики</NavLink>
            </nav >
            <Outlet context={problems} />
        </>
    )
}

export default ProblemsLayout;