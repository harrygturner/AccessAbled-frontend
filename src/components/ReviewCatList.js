import React from 'react';

const ReviewCatList = props => {
   return (
      <div className='review-cat'>
         <div className='review-cat one' onClick={props.handleReviewSelected}>ALL REVIEWS</div>
         <div className='review-cat two' onClick={props.handleReviewSelected}>LEAVE REVIEW</div>
      </div>
   )
}

export default ReviewCatList