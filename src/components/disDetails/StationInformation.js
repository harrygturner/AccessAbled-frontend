import React from 'react';
import StopInformation from './StopInformation'

const StationInformation = (props) => {
   const s = props.stationDetails

   const renderPartiallyAccessible = () => (
      "This station is PARTIALLY accessible via:"
   )

   const renderFullyAccessible = () => (
      "This station is FULLY accessible via:"
   )

   const renderStopInformation = () => s.stops.map(stop => <StopInformation stop={stop} /> )

   return(
      <div id='station-information'>
         <div className='accessibility'>
            { s.accessibility_type === 'Partial' ? renderPartiallyAccessible() : renderFullyAccessible() }
            <ol type='A'>
               { renderStopInformation() }   
            </ol>
         </div>
      </div>
   )
}

export default StationInformation