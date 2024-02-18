import React from 'react';

function ImagePreview({ file }) {

   const [preview, setPreview] = React.useState({});

   if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
         setPreview(reader.result);
      }
   }

   return (
      <div>
         <img src={preview} alt='фото дефекта' className='problemdetails__photo' />
      </div >
   )
}

export default ImagePreview;