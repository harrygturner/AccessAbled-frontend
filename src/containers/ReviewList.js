import React, { Component } from 'react';
import ReviewCard from './ReviewCard';

export default class ReviewList extends Component {

   renderReviews = () => this.props.reviews.map( review => <ReviewCard review={review} key={review.id} userId={this.props.userId} />)
   
   render() {
      return(
         <div className='review-list'>
            {this.renderReviews()}
         </div>
      )
   }
}
