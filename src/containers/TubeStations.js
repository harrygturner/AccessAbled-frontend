import React, { Component } from 'react';
import StationListElColl from '../components/disDetails/StationListElColl'

export default class TubeStations extends Component {

   renderStationElColl = () => this.props.stations.map(station => (
      <StationListElColl 
         key={station.id} 
         station={station} 
         handleStationElClick={this.props.handleStationElClick} 
         accessibleStations={this.props.accessibleStations}
         handleStationElHover={this.props.handleStationElHover}
      />
   ))

   render() {
      return (
         <div className='station-list'>
            {this.renderStationElColl()}
         </div>
      )
   }
}
