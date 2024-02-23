import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function InspectionLayout() {

   return (
      <>
         <nav className="problemslayout__nav">
            <NavLink end className={({ isActive }) => isActive ? 'problemslayout__link active' : 'problemslayout__link'} to='/inspection'>Проверка на линии</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'problemslayout__link active' : 'problemslayout__link'} to='/inspection/warehouse'>Проверка на складе</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'problemslayout__link active' : 'problemslayout__link'} to='/inspection/analysis'>Аналитика</NavLink>
         </nav >
         <Outlet />
      </>
   )
}

export default InspectionLayout;