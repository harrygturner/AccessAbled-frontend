import React, { Component } from 'react';
import { Collapse } from 'react-collapse';
import StationInformation from './StationInformation'

class StationListElColl extends Component {

   state = {
      isOpened: false,
      height: 100,
      stationElSelectedId: null
   }

   renderCollapsableComponent = () => {
      const { isOpened } = this.state;
      return(
         <Collapse isOpened={isOpened}>
            <StationInformation
               stationDetails={this.props.accessibleStations.find(station => station.id === this.state.stationElSelectedId)}
            />
         </Collapse>
      )
   }
   
   render() {
      const station = this.props.station
      const stationId = station.accessible_station_id
      console.log(this.props)

      return (
         <div id='station-info'>
            <div className='station-el' 
               onClick={ () => this.setState({ isOpened: !this.state.isOpened, stationElSelectedId: stationId }) } 
            >
               <div className='station-name' 
                  onClick={() => this.setState({ isOpened: !this.state.isOpened, stationElSelectedId: stationId })}
               >
                  {station.name}
               </div> 
               <div className='station-dist' 
                  data-id={stationId} 
                  onClick={() => this.setState({ isOpened: !this.state.isOpened, stationElSelectedId: stationId })}
               >
                  Distance: {station.distance} metres
               </div>
            </div>
            { this.state.stationElSelectedId 
               ? this.renderCollapsableComponent()
               : null
            }
         </div>
      )
   }
}
         
export default StationListElColl