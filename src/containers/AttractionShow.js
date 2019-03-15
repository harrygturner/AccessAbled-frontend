import React, { Component } from 'react';
import ImageMap from './ImageMap';
import DisabledContent from './DisabledContent';

export default class AttractionShow extends Component {

   state = {
      attraction: this.props.attraction
   }

   componentDidMount() {
      const attractionId = parseInt(this.props.match.url.split('/')[this.props.match.url.split('/').length - 1])
      if(!this.props.attraction) {
         fetch(`http://localhost:3000/attractions/${attractionId}`)
            .then( resp => resp.json() )
            .then( data => {
               debugger
               this.setState({
                  attraction: data
               })
            })
      } 

   }

   render(){ 
      const attraction = this.state.attraction
      return(
         <div>
            <div id='attraction-show'>
               <div className='attr-row1'>
                  <ImageMap />
                  <div className='attr-content'>
                     <div className='heading'>
                        {attraction.name}
                     </div>
                     <div className='description'>
                        {attraction.about_attraction}
                     </div>
                  </div>
               </div>
            </div>
            <DisabledContent attraction={attraction} />
         </div>
      )
   }
} 