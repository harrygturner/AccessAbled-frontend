import React, { Component } from 'react';
import ReviewList from './ReviewList'
import ReviewHeader from '../components/ReviewHeader';
import ReviewForm from './forms/ReviewForm';
import ErrorMessage from '../components/ErrorMessage';
import API from '../API';

export default class ReviewContainer extends Component {

   state = {
      reviews: [],
      reviewListRendering: true,
      errorMessage: ''
   }

   componentDidMount() {
      fetch(`http://localhost:3000/attraction_reviews/${this.props.attractionId}`)
         .then(resp => resp.json())
         .then( reviews => {
            this.setState({
               reviews
            })
         })
   }

   handleReviewviewClick = event => {
      event.persist();
      API.validate()
         .then(resp => {
            if (resp.error) {
               this.setState({ 
                  reviewListRendering: event.target.className === 'form' ? false : true,
                  errorMessage: resp.error 
               })
            } else {
               this.setState({ 
                  reviewListRendering: event.target.className === 'form' ? false : true
               })
            }
         }
      )
   }

   handleReviewCreate = review => {
      this.setState({ 
         reviews: [...this.state.reviews, review],
         reviewListRendering: true
      })
   }

   handleNotSignedInUser = () => this.state.errorMessage 
      ? <ErrorMessage /> 
      : <ReviewForm attractionId={this.props.attractionId} handleReviewCreate={this.handleReviewCreate} />

   render() {
      return(
         <div id='review'>
            <ReviewHeader handleReviewViewClick={this.handleReviewviewClick}/>
            { this.state.reviews[0] && this.state.reviewListRendering 
               ? <ReviewList reviews={this.state.reviews} /> 
               : this.handleNotSignedInUser()
            } 
         </div>
      )
   }
} 