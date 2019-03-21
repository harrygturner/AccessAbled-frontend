import React from 'react';

const TrainMarker = (props) => {
   // if (props.id === props.stationSelectedId){
   //    return (
   //       <div className='marker'>
   //          <i className="fas fa-map-pin" style={{
   //             color: 'darkred',
   //             fontSize: '28px',
   //             margin: '-40px -20px'
   //          }}></i>
   //       </div>
   //    )
   // } else
   if (props.id === props.stationHoverId){
      return (
         <div className='marker'>
            <i className="fas fa-map-pin" style={{
               color: 'green',
               fontSize: '28px',
               margin: '-40px -20px'
            }}>
            </i>
         </div>
      )
   } else {
      return (
         <div className='marker'>
            <i className="fas fa-map-pin" style={{
               color: 'darkred',
               fontSize: '28px',
               margin: '-40px -20px' 
            }}>
            </i>
         </div>
      )
   }

}

export default TrainMarker