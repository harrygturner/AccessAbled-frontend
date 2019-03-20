import React from 'react';

const StopInformation = (props) => {
   const stop = props.stop

   return(
      <li id='stop-information'>
         The {stop.line} line, travelling {stop.direction} towards {stop.direction_towards}
         <ul>
            <li>Minimum Gap</li>
            <li></li>
         </ul>
      </li>
   )
}

export default StopInformation