import React, { Component } from 'react';
import { Link } from "react-router-dom";
import API from '../../API'

export default class LoginPage extends Component {

   state = {
      username: '',
      password: '',
      errorMessage: ''
   }

   handleChange = (event) => {
      this.setState({
         [event.target.name]: event.target.value
      });
   }

   handleLoginRequest = (event) => {
      event.preventDefault();
      const { loginUser, history } = this.props;
      const user = this.state;
      API.login(user)
         .then(data => {
            if(data.error) {
               this.handleError(data.error);
            } else {
               loginUser(data);
               history.push('/')
            }
         });
   }

   handleError = errorMessage => {
      document.querySelector('#login form').reset();
      this.setState({ errorMessage })
   }

   render(){
      return(
         <div id='login'>
            <div className='center-logo'>
               <div className='logo'>
               
               </div>
            </div>
            <div className='signup-image'>
            </div>
            <div className='signup-form'>
               <div className='error-message'>
                  { this.state.errorMessage ? this.state.errorMessage : null }
               </div>
               <form onSubmit={this.handleLoginRequest}>
                  <div className='title'>
                     ACCOUNT LOGIN
                  </div>
                  <div className='username middle'>
                     <input type='text' name='username' placeholder='Username' onChange={this.handleChange} />
                  </div>
                  <div className='password middle'>
                     <input type='password' name='password' placeholder='Password' onChange={this.handleChange} />
                  </div>
                  <div className='submit'>
                     <input type='submit' value='LOGIN' />
                  </div>
               </form>
               <div className='ca-link'>
                  <Link to='/create_account'>CREATE ACCOUNT</Link>
               </div>
            </div>
         </div>
      )
   }
}