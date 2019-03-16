import React from 'react';

const Accomodation = (props) => {
   const attr = props.attraction
   return (
      <div className='accom-details'>
         <div className='documents'>
            <p>Do they provide documnets in large print? {attr.large_print_doc ? 'Yes' : 'No'}</p>
            <p>Do they provide documnets in braille? {attr.braille_doc ? 'Yes' : 'No'}</p>
            <p>{attr.hearing_assistance}</p>
         </div>
         <div className='personal-items'>
            <p>Are mobility scooters allowed? {attr.mob_allowed}</p>
            <p>What about assistant dogs? {attr.assistance_dogs}</p>
         </div>
         <div className='fees'>
            {attr.reduce_fees}
         </div>
         <div className='staff'>
            <p>{attr.staff_training}</p>
         </div>
         <div className='more-info'>
            <p>{attr.additional_info}</p>
         </div>
      </div>
   )
}

export default Accomodation