import React from 'react';

const Accessibility = (props) => {
   const attr = props.attraction
   return (
      <div className='access-details'>
         <div className='parking'>
            <p>Is there disable parking? {attr.dis_parking ? 'Yes' : 'No'}</p>
            <p>{attr.car_park ? attr.car_park : 'This attraction has no onsite parking.'}</p>
         </div>
         <div className='entrance'>
            <p>{attr.accessability}</p>
            <p>{attr.door_type}</p>
            <p>{attr.counter_height}</p>
         </div>
      </div>
   )
}

export default Accessibility