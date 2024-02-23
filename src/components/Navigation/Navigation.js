import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import icon from '../../images/graph.svg';

function Navigation() {

   return (
      <nav className='navigation'>
         <Link to='/' className="navigation__logo">
            <img src={icon} alt='icon' className='navigation__icon' />
         </Link>
         <ul className="navigation__list">
            <li>
               <NavLink to="/problems" className="navigation__link">Проблемы</NavLink>
            </li>
            <li>
               <NavLink to="/inspection" className="navigation__link">Входной контроль</NavLink>
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