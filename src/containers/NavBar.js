import React, { Component } from 'react';

import NavLink from '../components/NavLink';
import { Link } from "react-router-dom";
import Logo from '../images/logo.png'

export default class NavBar extends Component {

   renderSearchOption = () => (
      <div className='search' onClick={this.props.handleSearchBtnClick}>
         <div className='search-btn'>
            <i className="fas fa-search"></i>
            Search
         </div>
      </div>
   )

   render() {
      return (
         <div id='Navbar'>
            {this.renderSearchOption()}
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