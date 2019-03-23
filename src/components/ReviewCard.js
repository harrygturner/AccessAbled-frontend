import React from 'react';
import Rating from './Rating';
import RatingBad from './RatingBad';

const ReviewCard = props => {
   const ratingN = props.review.rating

   const renderRating = rating => {
      const ratings = []
      for( let i=0; i<rating; i++ ){
         ratings.push(<Rating key={i} />);
      }
      return ratings
   }

   const renderBadRating = rating => {
      const ratings = []
      for (let i = 0; i < rating; i++) {
         ratings.push(<RatingBad key={i} />);
      }
      return ratings
   }

   const createdDate = () => {
      const date = props.review.created_at.split(/[0T-]/g);
      const day = date[4]
      const month = parseInt(date[3])
      const all_months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
      return day + ' ' + all_months[month-1]
   }  

   
   return (
      <div className='card'>
         <div className='right top title'>
            {props.review.title}
         </div>
         <div className='right bottom comment'>
            {props.review.comment}
         </div>
         <div className='left top rating'>
            {ratingN < 3 ? renderBadRating(ratingN) : renderRating(ratingN)}
         </div>
         <div className='left bottom username'>
            {props.review.user.username} created on {createdDate()}
         </div>
      </div>
   )
}

export default ReviewCard