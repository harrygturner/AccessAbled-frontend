import React, { Component } from 'react';
import { Link } from "react-router-dom";
import API from '../../API';


export default class CreateAccount extends Component {

   state = {
      user: {
         first_name: '',
         second_name: '',
         username: '',
         email: '',
         password: ''
      },
      errorMessage: ''
   }

   handleChange = (event) => {
      this.setState({
         user: {
            ...this.state.user,
            [event.target.name]: event.target.value
         }
      })
   }

   handleCreateRequest = event => {
      event.preventDefault()
      const user = this.state.user
      API.create(user)
         .then()
   }

   render() {
      return (
         <div id='create'>
            <div className='center-logo'>
               <div className='logo'>

               </div>
            </div>
            <div className='create-image'>
            </div>
            <div className='create-form'>
               <div className='error-message'>
                  {this.state.errorMessage ? this.state.errorMessage : null}
               </div>
               <form onSubmit={this.handleCreateRequest}>
                  <div className='title'>
                     CREATE ACCOUNT
                  </div>
                  <div className='firstN row2 left'>
                     <input type='text' name='first_name' placeholder='First Name' onChange={this.handleChange} />
                  </div>
                  <div className='secondN row2 right'>
                     <input type='text' name='second_name' placeholder='Second Name' onChange={this.handleChange} />
                  </div>
                  <div className='username row3 left'>
                     <input type='test' name='username' placeholder='Username' onChange={this.handleChange} />
                  </div>
                  <div className='password row3 right'>
                     <input type='password' name='password' placeholder='Password' onChange={this.handleChange} />
                  </div>
                  <div className='email'>
                     <input type='text' name='email' placeholder='Email Address' onChange={this.handleChange} />
                  </div>
                  <div className='submit'>
                     <input type='submit' value='CREATE' />
                  </div>
               </form>
               <div className='ca-link'>
                  <Link to='/login'>Already a user? LOGIN</Link>
               </div>
            </div>
         </div>
      )
   }
}