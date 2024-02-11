import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {

   return (
      <nav className='navigation'>
         <Link to='/' className="navigation__logo">
            <p>CMK</p>
         </Link>
         <ul className="navigation__list">
            <li>
               <Link to="/problems" className="navigation__link">Проблемы</Link>
            </li>
            <li>
               <Link to="/incoming" className="navigation__link">Входной контроль</Link>
            </li>
            <li>
               <Link to="/audit" className="navigation__link">Аудиты поставщиков</Link>
            </li>
         </ul>
         <ul className="navigation__button-list">
            <li className="navigation__item">
               <Link to="/signup" className="navigation__button">Регистрация</Link>
            </li>
            <li className="navigation__item">
               <Link to="/signin" className="navigation__button navigation__button_green">Войти</Link>
            </li>
         </ul>
         <Link to="/Profile" className="navigation__button navigation__button_gray">Аккаунт</Link>
      </nav>
   )
}

export default Navigation;