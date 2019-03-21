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
         user_id: 1
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
                  TITLE: <br />
                  <input type='text' name='title' placeholder='Enter review title...' onChange={this.onChange} /><br />
               </div>
               <div className='comment'>
                  DESCRIPTION: <br />
                  <input type='textarea' name='comment' placeholder='Enter review description...' onChange={this.onChange} /><br />
               </div>
               <div className='rating top'>
                  RATING: <br />
                  <input type='number' name='rating' onChange={this.onChange} /><br />
               </div>
               <div className='submit'>
                  <input type='submit' />
               </div>
            </form>
         </div>
      )
   }
}