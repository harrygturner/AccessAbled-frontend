import React, { Component } from 'react';
import images from '../images/CardImages'

export default class ImageMap extends Component {
   render() {
      const attraction = this.props.attraction
      return(
         <div className='attraction-img'>
            <img src={images[attraction.id-1]} alt='The Attraction' />
         </div>
      )
   }
}