import React from 'react';

const ReviewHeader = (props) => {
   return(
      <div className='review-header'>
         <div className='list' onClick={props.handleReviewViewClick}>
            View All Reviews 
         </div>
         <div className='form' onClick={props.handleReviewViewClick}>
            Leave A Review
         </div>
      </div>
   )
}

export default ReviewHeader