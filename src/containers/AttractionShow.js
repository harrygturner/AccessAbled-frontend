import React, { Component } from 'react';
import AttractionImage from '../components/AttractionImage';
import DisabledContent from './DisabledContent';
import AttractionMap from './AttractionMap';

export default class AttractionShow extends Component {

   state = {
      stations: []
   }

   componentDidMount() {
      const attraction_id = this.props.attraction.id;
      fetch(`http://localhost:3000/attraction_stations/${attraction_id}`)
         .then(resp => resp.json())
         .then(stations => {
            this.setState({
               stations
            })
         })
   }

   render(){ 
      const attraction = this.props.attraction
      return(
         <div id='show-page'>
            <div id='attraction-show'>
               <div className='attr-row1'>
                  <AttractionImage attraction={attraction} />
                  <div className='attr-content'>
                     <div className='heading'>
                        {attraction.name}
                     </div>
                     <div className='description'>
                        {attraction.about_attraction}
                     </div>
                     <div className='address'>
                        Address: {attraction.address}
                     </div>
                  </div>
               </div>
            </div>
            <div className='attr-row2'>
               <DisabledContent attraction={attraction} />
               <AttractionMap stations={this.state.stations} attraction={this.props.attraction} />
            </div>
         </div>
      )
   }
} 