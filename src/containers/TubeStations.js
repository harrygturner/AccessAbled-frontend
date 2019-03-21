import React, { Component } from 'react';
import StationListElColl from '../components/disDetails/StationListElColl'

export default class TubeStations extends Component {

   state = {
      stationElClickedId: null
   }

   handleStationElClick = (stationId) => {
      this.setState({stationElClickedId: stationId})
   }

   renderStationElColl = () => this.props.stations.map(station => {
      return(
         <StationListElColl 
            key={station.id} 
            station={station} 
            handleStationElClick={this.handleStationElClick} 
            accessibleStations={this.props.accessibleStations}
            handleStationElHover={this.props.handleStationElHover}
            isOpen={ this.state.stationElClickedId === station.accessible_station_id ? true : false }
         />
      )}
   )
      


   render() {
      return (
         <div className='station-list'>
            {this.renderStationElColl()}
         </div>
      )
   }
}
