import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {

   return (
      <nav className='navigation'>
         <NavLink to='/' className="navigation__logo">
            <p>QMS</p>
         </NavLink>
         <ul className="navigation__list">
            <li>
               <NavLink to="/problems" className="navigation__link">Проблемы</NavLink>
            </li>
            <li>
               <NavLink to="/incoming" className="navigation__link">Входной контроль</NavLink>
            </li>
            <li>
               <NavLink to="/audit" className="navigation__link">Аудиты поставщиков</NavLink>
            </li>
         </ul>
         <ul className="navigation__button-list">
            <li className="navigation__item">
               <NavLink to="/signup" className="navigation__button">Регистрация</NavLink>
            </li>
            <li className="navigation__item">
               <NavLink to="/signin" className="navigation__button navigation__button_green">Войти</NavLink>
            </li>
         </ul>
         <NavLink to="/Profile" className="navigation__button navigation__button_gray">Аккаунт</NavLink>
      </nav>
   )
}

export default Navigation;