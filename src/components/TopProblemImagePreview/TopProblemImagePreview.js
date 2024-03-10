import React from 'react';

function TopProblemImagePreview({ file }) {

   return (
      <div>
         <img src={`http://localhost:3000/` + file} alt='фото дефекта' className='topproblemdetails__photo' />
      </div >
   )
}

export default TopProblemImagePreview;