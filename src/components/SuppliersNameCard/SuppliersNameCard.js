import React from 'react';
import { NavLink } from 'react-router-dom';

function SuppliersNameCard({ supplier }) {

   return (
      <NavLink className={({ isActive }) => isActive ? 'suppliersnamecard active' : 'suppliersnamecard'} to={supplier.supplier}>{supplier.supplier}</NavLink>
   )
}

export default SuppliersNameCard;