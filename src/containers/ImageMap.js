import React, { Component } from 'react';
import image from '../images/harry-potter.jpg'

export default class ImageMap extends Component {
   render() {
      return(
         <div className='attraction-img'>
            <img src={image} alt='The Attraction' />
         </div>
      )
   }
}