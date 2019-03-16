import React, { Component } from 'react';
import Accessibility from '../components/disDetails/Accessibility'
import Accomodation from '../components/disDetails/Accomodation'
import Facilities from '../components/disDetails/Facilities'


export default class DisabledContent extends Component {

   state = {
      categorySelected: null
   }

   handleClick = e => {
      const category = e.target.innerText.toLowerCase();
      this.setState({
         categorySelected: category
      })
   }

   renderDisabledContent = () => {
      const attraction = this.props.attraction
      switch(this.state.categorySelected){
         case 'accessibility':
            return <Accessibility attraction={attraction} />;
         case 'facilities':
            return <Facilities attraction={attraction} />;
         case 'accomodation':
            return <Accomodation attraction={attraction} />;
         default:
            return <h4>Select Category Above</h4>;
      }
   }

   render() {
      return (
         <div className='attr-row2'>
            <div className='dis-cat'>
               <div className='cat1' onClick={this.handleClick}>ACCESSIBILITY</div>
               <div className='cat2' onClick={this.handleClick}>FACILITIES</div>
               <div className='cat3' onClick={this.handleClick}>ACCOMODATION</div>
            </div>
            <div>
            {this.renderDisabledContent()}
            </div>
         </div>
      )
   }
}