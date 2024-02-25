import React from 'react';

function ProblemImagePreview({ file }) {

   return (
      <div>
         <img src={`http://localhost:3000/` + file} alt='фото дефекта' className='problemdetails__photo' />
      </div >
   )
}

export default ProblemImagePreview;