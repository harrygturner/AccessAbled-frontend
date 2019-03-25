import React, { Component } from 'react';
import NavLink from '../components/NavLink';
import { Link } from "react-router-dom";
import Logo from '../images/logo.png'

export default class NavBarHomeWithoutSearch extends Component {

   render() {
      return (
         <div id='Navbar'>
            <div className='logo'>
               <img src={Logo} alt='AccessAbled logo' />
            </div>
            <div className='nav-links right'>
               <div style={{ fontWeight: '900' }}>
                  ARE YOU A MEMBER?
               </div>
               <div className='login'>
                  <Link to='/login'>< NavLink name={'Login'} /></Link>
               </div>
               <div className='login'>
                  <Link to='/create_account'>< NavLink name={'Register'} /></Link>
               </div>
            </div>

         </div>
      )
   }
}