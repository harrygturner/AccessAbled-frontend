import React, { Component } from 'react';

import NavLink from '../components/NavLink';
import SearchBar from './SearchBar';


export default class NavBar extends Component {
   render() {
      return (
         <div id='Navbar'>
            <div className='logo'>
               AccessAble
            </div>
            <div className='nav-links'>
               < NavLink />
               < NavLink />
               < NavLink />
               < SearchBar />
            </div>
            
         </div>
      )
   }
}