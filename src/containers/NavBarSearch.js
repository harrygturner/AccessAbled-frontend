import React, { Component } from 'react';
import SearchBar from '../components/SearchBar'

export default class NavBarSearch extends Component {
   render() {
      return (
         <div id='Navbar-search'>
            <SearchBar searchQuery={this.props.searchQuery} />
            <div className='filter'>
               SORT BY
            </div>
            <div className='exit' onClick={this.props.cancelSearch}>
               X
            </div>
         </div>
      )
   }
}