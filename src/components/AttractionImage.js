import React from 'react';
import images from '../images/CardImages'

const AttractionImage = props => {
   const attraction = props.attraction

   return(
      <div className='attraction-img'>
         <img src={images[attraction.id-1]} alt='The Attraction' />
      </div>
   )

}

export default AttractionImage