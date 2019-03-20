import React from 'react';

const DisabledContent = (props) => {
   return (
      <div className='disabled-container'>
         <div className='dis-cat list'>
            <div className='dis-cat 1' onClick={props.handleCategorySelected}>ACCESSIBILITY</div>
            <div className='dis-cat 2' onClick={props.handleCategorySelected}>FACILITIES</div>
            <div className='dis-cat 3' onClick={props.handleCategorySelected}>ACCOMODATION</div>
            <div className='dis-cat 4' onClick={props.handleCategorySelected}>TUBE STATIONS</div>
         </div>
         <div className='dis-info'>
            {props.renderDisabledContent()}
         </div>
      </div>
   )
}

export default DisabledContent