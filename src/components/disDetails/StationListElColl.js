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

   handleClick = () => {
      const stationId = this.props.station.accessible_station_id
      this.setState({ 
         isOpened: !this.state.isOpened, 
         stationElSelectedId: stationId 
      })
      this.props.handleStationElClick(stationId)
   }

   handleHover = (event) => this.props.handleStationElHover(event)
   
   render() {
      const station = this.props.station

      return (
         <div id='station-info'>
            <div className='station-el' 
               onClick={ this.handleClick } 
               onMouseOver={ this.handleHover }
         >
               <div className='station-name' data-id={station.accessible_station_id}
                  onClick={ this.handleClick }
                  onMouseOver={ this.handleHover }
         >
                  {station.name}
               </div> 
               <div className='station-dist' data-id={station.accessible_station_id}
                  onClick={ this.handleClick }
                  onMouseOver={ this.handleHover }
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