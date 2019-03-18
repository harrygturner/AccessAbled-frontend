import React, { Component } from 'react';
import ImageMap from './ImageMap';
import DisabledContent from './DisabledContent';
import { Redirect } from 'react-router'

export default class AttractionShow extends Component {

   render(){ 
      if(!this.props.attraction){
         return(
            <Redirect to="/" />
         )
      } else {
         const attraction = this.props.attraction
         return(
            <div>
               <div id='attraction-show'>
                  <div className='attr-row1'>
                     <ImageMap attraction={attraction} />
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
} 