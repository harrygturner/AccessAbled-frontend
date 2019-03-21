import React, { Component } from 'react';
import ReviewCard from '../components/ReviewCard';

export default class ReviewList extends Component {

   renderReviews = () => this.props.reviews.map( review => <ReviewCard review={review} key={review.id} />)
   
   render() {
      return(
         <div className='review-list'>
            {this.renderReviews()}
         </div>
      )
   }
}
