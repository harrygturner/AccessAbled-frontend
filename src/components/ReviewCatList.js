import React from 'react';

const ReviewCatList = props => {
   return (
      <div className='review-cat'>
         <div className='review-cat one hover' onClick={props.handleReviewViewClick}>ALL REVIEWS</div>
         <div className='form hover' onClick={props.handleReviewViewClick}>LEAVE REVIEW</div>
      </div>
   )
}

export default ReviewCatList