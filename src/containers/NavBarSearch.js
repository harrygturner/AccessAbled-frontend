import React, { Component } from 'react';
import SearchBar from '../components/SearchBar'

export default class NavBarSearch extends Component {

   render() {
      return (
         <div id='Navbar-search'>
            <SearchBar searchQuery={this.props.searchQuery} />
            <div className='filter' onClick={this.props.handleSortBtnClick} >
               SORT BY RATING
            </div>
            <div className='exit' onClick={this.props.cancelSearch}>
               X
            </div>
         </div>
      )
   }
   
}