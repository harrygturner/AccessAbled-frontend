import React from 'react';
import ReviewList from '../containers/ReviewList';
import { Link } from "react-router-dom";
import '../ReviewError.css';

const ErrorMessage = props => {
   return(
      <div className='non-user'>
         <ReviewList reviews={props.reviews} userId={props.userId} /> 
         <div className='cloak'>
            <div className='content'>
               <div className='message'>
                  In order to leave and like a review you must have an account with AccessAbled. <br />
                  To create an account please click the button below: 
               </div>
               <div className='link'>
                  <Link to='/create_account'>Sign Up</Link>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ErrorMessage