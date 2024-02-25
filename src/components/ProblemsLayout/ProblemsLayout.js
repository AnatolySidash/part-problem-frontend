import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function ProblemsLayout() {

    return (
        <>
            <nav className="problemslayout__nav">
                <NavLink end className={({ isActive }) => isActive ? 'problemslayout__link active' : 'problemslayout__link'} to='/problems'>Список проблем</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'problemslayout__link active' : 'problemslayout__link'} to='newproblem'>Новая проблема</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'problemslayout__link active' : 'problemslayout__link'} to='analysis'>Аналитика</NavLink>
            </nav >
            <Outlet />
        </>
    )
}

export default ProblemsLayout;