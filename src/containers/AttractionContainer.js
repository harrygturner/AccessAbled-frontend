import React, { Component } from 'react';
import AttractionShow from '../components/AttractionShow'

export default class AttractionContainer extends Component {
   
   renderAttractions = () => {
      return this.props.attractions.map( attraction => < AttractionShow attraction={attraction} key={attraction.id} handleAttractionSelected={this.props.handleAttractionSelected} /> ) 
   }

   render() {
      return(
         <div id='attraction-cont'>
            {this.renderAttractions()}
         </div>
      )
   }
}