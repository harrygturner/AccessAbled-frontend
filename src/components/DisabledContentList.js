import React from 'react';

const DisabledContentList = (props) => {
   return (
      <div className='dis-cat list'>
         <div className='dis-cat one' onClick={props.handleCategorySelected}>ACCESSIBILITY</div>
         <div className='dis-cat two' onClick={props.handleCategorySelected}>FACILITIES</div>
         <div className='dis-cat three' onClick={props.handleCategorySelected}>ACCOMODATION</div>
         <div className='dis-cat four' onClick={props.handleCategorySelected}>TUBE STATIONS</div>
      </div>
   )
}

export default DisabledContentList