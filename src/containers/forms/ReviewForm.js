import React, { Component } from 'react';

export default class ReviewForm extends Component {

   state = {
      title: '',
      comment: '',
      rating: null
   }

   render() {
      return(
         <div id='review-form'>
            This is the form
         </div>
      )
   }
}