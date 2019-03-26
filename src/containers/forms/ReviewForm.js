import React, { Component } from 'react';

export default class ReviewForm extends Component {

   state = {
      title: '',
      comment: '',
      rating: null,
   }

   onChange = (e) => {
      this.setState({
         [e.target.name]: e.target.value
      })
   }

   submitReviewForm = (e) => {
      e.preventDefault();
      e.target.reset();
      const review = {
         ...this.state,
         attraction_id: this.props.attractionId,
         user_id: this.props.userId
      }
      fetch('http://localhost:3000/reviews', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(review)
      })
         .then(resp => resp.json())
         .then(this.props.handleReviewCreate)
   }

   render() {
      return(
         <div id='review-form'>
            <form onSubmit={this.submitReviewForm}>
               <div className='title top'>
                  <input type='text' name='title' placeholder='REVIEW TITLE' onChange={this.onChange} /><br />
               </div>
               <div className='comment'>
                  <input type='textarea' name='comment' placeholder='YOUR REVIEW' onChange={this.onChange} /><br />
               </div>
               <div className='rating top'>
                  <input type='number' name='rating' onChange={this.onChange} placeholder='RATING' /><br />
               </div>
               <div className='subheading'>
                  Could you say a little more about it?
               </div>
               <div className='submit'>
                  <input type='submit' value='SUBMIT' />
               </div>
            </form>
         </div>
      )
   }
}