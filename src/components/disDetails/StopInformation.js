import React from 'react';

const StopInformation = (props) => {
   const stop = props.stop

   return(
      <li id='stop-information' type='A'>
         The {stop.line} line, travelling {stop.direction} towards {stop.direction_towards}
         <ul>
            <li>Minimum Gap {stop.gap_min}   |   Maximum gap {stop.gap_max}</li>
            <li>Minimum step {stop.step_min}   |   Maximum step {stop.step_max}</li>
         </ul>
      </li>
   )
}

export default StopInformation