import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function AnalysisLayout() {

    return (
        <>
            <div className='analysis__container'>
                <nav className="analysislayout__nav">
                    <NavLink end className={({ isActive }) => isActive ? 'analysislayout__link active' : 'analysislayout__link'} to='.'>Основная информация</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'analysislayout__link active' : 'analysislayout__link'} to='supplier'>Проблемы поставщиков</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'analysislayout__link active' : 'analysislayout__link'} to='storage'>Проблемы хранения</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'analysislayout__link active' : 'analysislayout__link'} to='model'>Проблемы по моделям</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'analysislayout__link active' : 'analysislayout__link'} to='system'>Проблемы по системам</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'analysislayout__link active' : 'analysislayout__link'} to='action'>Проблемы по решению</NavLink>
                </nav >
                <Outlet />
            </div>
        </>
    )
}

export default AnalysisLayout;