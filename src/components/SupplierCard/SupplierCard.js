import React from 'react';

function SupplierCard({ supplier }) {

   return (
      <article className='suppliercard'>
         <ul className='suppliercard__list'>
            <li className='suppliercard__item'>{supplier.supplier}</li>
            <li className='suppliercard__item'>Проблемы: {supplier.problem_qty} шт.</li>
            <li className='suppliercard__item'>Дефекты: {supplier.defect_qty} шт.</li>
         </ul>
      </article>
   )
}

export default SupplierCard;