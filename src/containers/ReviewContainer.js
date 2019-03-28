import React, { Component } from 'react';
import ReviewList from './ReviewList'
import ReviewForm from './forms/ReviewForm';
import ErrorMessage from '../components/ErrorMessage';

export default class ReviewContainer extends Component {
   
   state = {
      reviews: []
   }

   componentDidMount = () => {
      fetch(`http://localhost:3000/attraction_reviews/${this.props.attractionId}`)
         .then(resp => resp.json())
         .then(reviews => {
            this.setState({
               reviews
            })
         })
   }

   handleReviewCreate = review => {
      this.setState({
         reviews: [...this.state.reviews, review],
      })
      this.props.renderAllReviews()
   }

   handleNotSignedInUser = () => this.props.errorMessage 
      ? <ErrorMessage reviews={this.state.reviews} userId={this.props.userId} /> 
      : <ReviewForm attractionId={this.props.attractionId} reviews={this.state.reviews} handleReviewCreate={this.handleReviewCreate} userId={this.props.userId} />

   render() {
      return(
         <div id='review'>
            { this.state.reviews[0] && this.props.reviewListRendering 
               ? <ReviewList reviews={this.state.reviews} userId={this.props.userId} /> 
               : this.handleNotSignedInUser()
            } 
         </div>
      )
   }
} 