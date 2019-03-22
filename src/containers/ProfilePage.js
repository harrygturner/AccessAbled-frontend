import React, { Component } from 'react';
import NavBar from './NavBar'

export default class ProfilePage extends Component {
   render() {
      return(
         <div id='profile-page'>
            <NavBar />
            <h1>Profile Page</h1>
            {this.props.user.username}
         </div>
      )
   }
}