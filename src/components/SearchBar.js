import React from 'react'

const SearchBar = (props) => {
   return(
      <div className='search'>
         <input type='text' placeholder='Search for London Attractions...' onChange={props.searchQuery}></input>
      </div>
   )
}

export default SearchBar