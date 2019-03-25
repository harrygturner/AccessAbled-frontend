import React, { PureComponent } from 'react';
import { Collapse } from 'react-collapse';
import StationInformation from './StationInformation'

class StationListElColl extends PureComponent {

   state = {
      isOpened: false,
      height: 100,
      stationElSelectedId: null
   }

   renderCollapsableComponent = () => {
      return(
         <Collapse isOpened={this.props.isOpen}>
            <StationInformation
               stationDetails={this.props.accessibleStations.find(station => station.id === this.state.stationElSelectedId)}
               handleHover={this.handleHover}
            />
         </Collapse>
      )
   }

   handleClick = () => {
      const stationId = this.props.station.accessible_station_id
      this.props.handleStationElClick(stationId)
      this.setState({ 
         isOpened: this.props.isOpen, 
         stationElSelectedId: stationId 
      })
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
                  {this.state.isOpened ? <i className="fas fa-chevron-circle-down"></i> : <i className="fas fa-chevron-circle-right"></i>}
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