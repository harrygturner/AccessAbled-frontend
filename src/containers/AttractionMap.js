import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
// API Key = AIzaSyDcgNp0iCJKaG34uaJusZn1W3nB3rcy454

export default class AttractionMap extends Component {
   
   state = {
      center: {
         lat: this.props.attraction.lat,
         lng: this.props.attraction.long
      },
      zoom: 15
   };
   
   render() {
      return (
         <div id='attraction-map' style={{ height: '100%', width: '100%' }}>
            <GoogleMapReact
               bootstrapURLKeys={{ key: 'AIzaSyDcgNp0iCJKaG34uaJusZn1W3nB3rcy454' }}
               defaultCenter={this.state.center}
               defaultZoom={this.state.zoom}
            />
         </div>
      )
   }
}