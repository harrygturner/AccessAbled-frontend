import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import TrainMarker from '../components/TrainMarker';
import AttractionMarker from '../components/AttractionMarker';

export default class AttractionMap extends Component {
   
   state = {
      center: {
         lat: this.props.attraction.lat,
         lng: this.props.attraction.long
      },
      zoom: 14
   };

   // station id's being passed down in props link to the station.accessible_station_id
   renderTrainMarkers = () => this.props.stations.map(station => {
      return(
         < TrainMarker
            key={station.id} 
            lat={station.lat}
            lng={station.long}
            id={station.accessible_station_id}
            stationSelectedId={this.props.stationSelecetedId}
            stationHoverId={parseInt(this.props.stationHoverId)}
         />
      )
   })
   
   render() {
      return (
         <div id='attraction-map' style={{ height: '100%', width: '100%' }}>
            <GoogleMapReact
               bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API }}
               defaultCenter={this.state.center}
               defaultZoom={this.state.zoom}
            >
            <AttractionMarker
            lat={this.props.attraction.lat}
            lng={this.props.attraction.long}
            />
            {this.renderTrainMarkers()}
            </GoogleMapReact>
         </div>
      )
   }
}