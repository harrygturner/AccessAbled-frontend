import React from 'react';
import images from '../images/CardImages'

const AttractionImage = props => {
   const attraction = props.attraction
   const cloudName = 'dyb7bucmi'

   return(
      <div className='attraction-img'>
         { attraction.image_id 
            ? <img src={`https://res.cloudinary.com/${cloudName}/image/upload/c_fill,h_460,w_1000/${attraction.image_id}`} alt={attraction.name} />
            : <img src={images[attraction.id-1]} alt={attraction.name} />
         }
      </div>
   )

}

export default AttractionImage