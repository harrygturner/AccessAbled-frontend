import React, { Component } from 'react';
import SearchBar from '../components/SearchBar'

export default class NavBarSearch extends Component {
   
   state = {
      sortBtnClicked: false
   }

   handleSortBtnClick = () => this.setState({ sortBtnClicked: true })

   render() {
      return (
         <div id='Navbar-search'>
            <SearchBar searchQuery={this.props.searchQuery} />
            <div className='filter' onClick={this.handleSortBtnClick} >
               SORT BY
            </div>
            <div className='exit' onClick={this.props.cancelSearch}>
               X
            </div>
         </div>
      )
   }
}