import React from 'react';

const DisabledContent = (props) => {
   return (
      <div className='attr-row2'>
         <div className='dis-cont'>
            {props.attraction.door_type}
         </div>
      </div>
   )

}

export default DisabledContent