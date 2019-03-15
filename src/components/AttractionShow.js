import React from 'react';

const truncate = (str, no_words) => {
   return str.split(" ").splice(0, no_words).join(" ");
}

const AttractionShow = (props) => {

   const attraction = props.attraction
   return(
      <div className='attraction-card' onClick={props.handleAttractionSelection}>
         <div className='img'>
            <div className='attr-name'>
               {attraction.name}
            </div>
         </div>
         <div className='content'>
            {truncate(attraction.about_attraction, 40)}...
         </div>
      </div>
   )
}

export default AttractionShow