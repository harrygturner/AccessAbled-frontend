import React from 'react';

const DisabledContent = (props) => {
   return (
      <div className='disabled-container'>
         <div className='dis-info' onMouseLeave={props.handleMouseLeaveDisabledContent}>
            {props.renderDisabledContent()}
         </div>
      </div>
   )
}

export default DisabledContent