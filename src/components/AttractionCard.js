import React from 'react';
import { Link } from "react-router-dom";

const truncate = (str, no_words) => {
   return str.split(" ").splice(0, no_words).join(" ");
}

const AttractionCard = (props) => {
   const attraction = props.attraction
   return(
      <Link to={`/attractions/${attraction.id}`} style={{ textDecoration: 'none' }} > 
         <div className='attraction-card' onClick={() => props.handleAttractionSelection(attraction.id)}>
            <div className='img'>
               <div className='attr-name'>
                  {attraction.name}
               </div>
            </div>
            <div className='content'>
               {truncate(attraction.about_attraction, 40)}...
            </div>
         </div>
      </Link>
   )
}

export default AttractionCard