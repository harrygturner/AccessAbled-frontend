import React, { Component } from 'react';

import NavLink from './NavLink';
import { Link } from "react-router-dom";
import Logo from '../images/logo.png'

export default class NavBarUserWithoutSearch extends Component {


   render() {
      return (
         <div id='Navbar'>
            <div className='logo'>
               <img src={Logo} alt='AccessAbled logo' />
            </div>
            <div className='user-nav-links'>
               <div className='home'>
                  <Link to='/'>< NavLink name={'Home'} /></Link>
               </div>
               <div className='profile'>
                  <Link to='/attraction'>< NavLink name={'Add Attraction'} /></Link>
               </div>
               <div className='sign-out' onClick={this.props.handleSignOut}>
                  < NavLink name={'Sign Out'} />
               </div>
            </div>
         </div>
      )
   }
}