import React from 'react';

const icons = {
   'Home': <i className="fas fa-home"></i>,
   'Profile': <i className="fas fa-user"></i>,
   'Sign Out': <i className= "fas fa-unlock" ></i>,
   'Login': <i className="fas fa-sign-in-alt"></i>,
   'Create Account': <i className="fas fa-user"></i>,
}

const NavLink = (props) => {
   return(
      <div className='nav-link'>
         <div className='icon'>
            {icons[props.name]}
         </div>
         {props.name}
      </div>
   )
}

export default NavLink