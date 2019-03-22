import React, { Component } from 'react';

import NavLink from '../components/NavLink';
import { Link } from "react-router-dom";

export default class NavBar extends Component {
   render() {
      return (
         <div id='Navbar'>
            <div className='logo'>
               AccessAble
            </div>
            <div className='nav-links left'>
               <Link to='/'>< NavLink name={'Home'} /></Link>
               <Link to={`/user/${this.props.userId}`}>< NavLink name={'Profile'} /></Link>
            </div>
            <div className='nav-links right' onClick={this.props.handleSignOut}>
               < NavLink name={'Sign Out'} />
            </div>
            
         </div>
      )
   }
}