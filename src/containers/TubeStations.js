import React, { Component } from 'react';
// import StationListEl from '../components/disDetails/StationListEl'
// import StationInformation from '../components/disDetails/StationInformation'
import StationListElColl from '../components/disDetails/StationListElColl'

export default class TubeStations extends Component {

   state = {
      stationElSelectedId: null,
   }
   
   handleStationElClick = (event) => {
      const stationId = parseInt(event.target.dataset.id)
      this.setState({
         stationElSelectedId: stationId
      })
   }

   renderStationEl = () => this.props.stations.map(station => (
      <StationListElColl 
         key={station.id} 
         station={station} 
         handleStationElClick={this.handleStationElClick} 
         accessibleStations={this.props.accessibleStations}
      />
   ))

   render() {
      return (
         <div className='station-list'>
            {this.renderStationEl()}
         </div>
      )
   }
}
