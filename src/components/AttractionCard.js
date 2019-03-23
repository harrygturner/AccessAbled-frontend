import React from 'react';
import { Link } from "react-router-dom";
import images from '../images/CardImages';
import AttractionRating from './AttractionRating'

// const truncate = (str, no_words) => {
//    return str.split(" ").splice(0, no_words).join(" ");
// }

const AttractionCard = (props) => {

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
               <img src={images[attraction.id-1]} alt='Attraction preview' />
               <figcaption>
                  <h2>{attraction.name}</h2>
                  <p>Rating: {attraction.reviews.length === 0 ? 'no reviews' : <AttractionRating rating={averageRating()}/> } </p>
               </figcaption>
            </figure>
         </div>
      </Link>
   )
}
            
            // <div className='content'>
            //    {truncate(attraction.about_attraction, 40)}...
            // </div>
export default AttractionCard