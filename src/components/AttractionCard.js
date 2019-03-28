import React from 'react';
import { Link } from "react-router-dom";
import images from '../images/CardImages';
import AttractionRating from './AttractionRating'

const AttractionCard = (props) => {
   const cloudName = 'dyb7bucmi'
   const attraction = props.attraction

   const averageRating = () => {
      const reviews = props.attraction.reviews;
      let totRating = 0;
      reviews.forEach(review => {
         totRating = totRating + review.rating;
      });
      return Math.round(totRating / reviews.length * 10) / 10;
   }

   return(
      <Link to={`/attractions/${attraction.id}`} style={{ textDecoration: 'none' }} > 
         <div className='attraction-card' onClick={() => props.handleAttractionSelection(attraction.id)}>
            <figure className='attr-content'>
               {attraction.image_id
                  ? <img src={`https://res.cloudinary.com/${cloudName}/image/upload/c_fill,h_460,w_1000/${attraction.image_id}`} alt={attraction.name} />
                  : <img src={images[attraction.id - 1]} alt={attraction.name} />
               }
               <figcaption>
                  <h2>{attraction.name}</h2>
                  <p>Rating: {attraction.reviews.length === 0 ? 'no reviews' : <AttractionRating rating={averageRating()}/> } </p>
               </figcaption>
            </figure>
         </div>
      </Link>
   )
}
            
export default AttractionCard