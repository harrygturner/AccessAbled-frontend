import React, { Component } from 'react';
import NavLink from '../components/NavLink';
import { Link } from "react-router-dom";

export default class NavBarHome extends Component {
   render() {
      return (
         <div id='Navbar'>
            <div className='logo'>
               AccessAble
            </div>
            <div className='nav-links right'>
               <Link to='/login'>< NavLink name={'Login'} /></Link>
               <Link to='/create_account'>< NavLink name={'Create Account'} /></Link>
            </div>
            
         </div>
      )
   }
}