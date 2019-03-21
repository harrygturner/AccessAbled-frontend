import React, { Component } from 'react';

export default class SearchBar extends Component {
   render() {
      return(
         <div id='search-bar'>
            <div className='text'>
               Search for a London Attraction:
            </div>
            <input type='text' placeholder='Search...' onChange={this.props.searchQuery}></input>
         </div>
      )
   }
}