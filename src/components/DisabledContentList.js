import React from 'react';

const DisabledContentList = (props) => {
   return (
      <div className='dis-cat list'>
         <div className='dis-cat one hover' onClick={props.handleCategorySelected}>ACCESSIBILITY</div>
         <div className='dis-cat two hover' onClick={props.handleCategorySelected}>FACILITIES</div>
         <div className='dis-cat three hover' onClick={props.handleCategorySelected}>ACCOMODATION</div>
         <div className='dis-cat four hover' onClick={props.handleCategorySelected}>TUBE STATIONS</div>
      </div>
   )
}

export default DisabledContentList