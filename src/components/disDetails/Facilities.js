import React from 'react';

const Facilities = (props) => {
   const attr = props.attraction
   return (
      <div className='fac-details'>
         <div className='lifts'>
            <p>{attr.lifts}</p>
         </div>
         <div className='toilets'>
            <p>{attr.dis_toilets}</p>
         </div>
         <div className='manouverability'>
            <p>{attr.chair_manouverability}</p>
         </div>
      </div>
   )
}

export default Facilities