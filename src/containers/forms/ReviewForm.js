import React, { Component } from 'react';
import ReviewList from '../ReviewList';

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
      const reviewCatList = document.querySelector('#review-cont .review-cat');
      const arr = Array.prototype.slice.call(reviewCatList.children);
      arr[0].style.borderBottom = 'solid 2px steelblue';
      arr[1].style.borderBottom = '';
   }

   render() {
      return(
         <div id='review-form'>
            <ReviewList reviews={this.props.reviews} userId={this.props.userId} />
            <div className='cloak'>
               <form onSubmit={this.submitReviewForm}>
                  <div className='title top'>
                     <input type='text' name='title' placeholder='Review Title' onChange={this.onChange} required /><br />
                  </div>
                  <div className='comment'>
                     <textarea rows='5' cols='10' name='comment' placeholder='Your Review' onChange={this.onChange} required /><br />
                  </div>
                  <div className='rating top'>
                     <input type='number' name='rating' onChange={this.onChange} placeholder='Rating' required min='1' max='5' /><br />
                  </div>
                  <div className='submit'>
                     <input type='submit' value='SUBMIT' />
                  </div>
               </form>
            </div>
         </div>
      )
   }
}