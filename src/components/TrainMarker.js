import React from 'react';

const TrainMarker = (props) => {
   return (
      <div className='marker' onClick={props.handleStationMarkerClick}>
         <i className="fas fa-map-pin" style={{
            color: 'darkred',
            fontSize: '28px',
            margin: '-40px -20px' 
         }}></i>
      </div>
   )
}

export default TrainMarker