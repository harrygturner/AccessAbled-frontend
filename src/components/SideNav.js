import React from 'react';

const SideNav = (props) => {
   return(
      <div id='side-nav'>
         <div className='about'>
            <div className='hover' onClick={props.scrollToNewPosition}>
               ABOUT
            </div>
         </div>
         <div className='access'>
            <div className='hover' onClick={props.scrollToNewPosition}>
               ACCESS
            </div>
         </div>
         <div className='reviews'>
            <div className='hover' onClick={props.scrollToNewPosition}>
               REVIEWS
            </div>
         </div>
      </div>
   )
}

export default SideNav