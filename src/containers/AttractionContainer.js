import React, { Component } from 'react';
import AttractionCard from '../components/AttractionCard'

export default class AttractionContainer extends Component {
   
   renderAttractions = () => {
      return this.props.attractions.map(attraction => < AttractionCard attraction={attraction} key={attraction.id} handleAttractionSelection={this.props.handleAttractionSelection} /> ) 
   }

   render() {
      return(
         <div id='attraction-cont'>
            {this.renderAttractions()}
         </div>
      )
   }
}