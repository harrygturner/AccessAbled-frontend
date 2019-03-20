import React from 'react';
import StopInformation from './StopInformation'

const StationInformation = (props) => {
   const s = props.stationDetails

   const renderPartiallyAccessible = () => {
      return (
         <div className='partial'>
            This station is PARTIALLY accessible via:
            {renderStopInformation()}
         </div>
      )

   }

   const renderPublicTransport = () => {
      if (s.taxi_rank === "Yes" && s.bus_route_accessible === "Yes"){
         return(
            'Both a taxi rank and bus services are accessible from the station'
         )
      } else if (s.taxi_rank === "Yes" && s.bus_route_accessible === "No") {
         return (
            'A taxi rank is accessible from the station, however, bus services are not'
         )
      } else if (s.taxi_rank === "No" && s.bus_route_accessible === "Yes") {
         return (
            'Bus services are accessible from the station, however, there is no taxi rank'
         )
      } else {
         return (
            'No further public transport services are accessible from this station'
         )
      }
   }

   const renderAdditionalAccessInfo = () => {
      if (s.additional_access_info){
         return(
            <div className='additional'>
               {s.additional_access_info.replace(/(<([^>]+)>)/ig, "")}
            </div>
         )
      } 
   }

   const renderFullyAccessible = () => (
      <div className='fully'>
         This station is FULLY accessible via all lines
      </div>
   )

   const renderStopInformation = () => s.stops.map(stop => <StopInformation stop={stop} key={stop.id} /> )

   return(
      <div id='station-information'>
         <div className='accessibility'>
            { s.accessibility_type === 'Partial' ? renderPartiallyAccessible() : renderFullyAccessible() }
         </div>
         <div className='facilities'>
            Accessible toilet at station? { s.accessible_toilet } <br />
            { s.accessible_toilet_note ? "NOTE: " + s.accessible_toilet_note : null} <br />
            Lift access to the station platform? { s.lift_access }
         </div>
         <div className='transport'>
            { renderPublicTransport() }
         </div>
         { renderAdditionalAccessInfo() }
      </div>
   )
}

export default StationInformation