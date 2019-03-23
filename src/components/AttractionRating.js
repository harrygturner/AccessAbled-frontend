import React from 'react';
import EmptyStar from './EmptyStar';
import HalfStar from './HalfStar';
import FullStar from './FullStar';

const AttractionRating = (props) => {

   const renderRating = () => {
      if(props.rating <= 0.25){
         return [<EmptyStar />]
      } else if (props.rating > 0.25 && props.rating <= 0.75) {
         return [<HalfStar />]
      } else if (props.rating > 0.75 && props.rating <= 1.25) {
         return [<FullStar />]
      } else if (props.rating > 1.25 && props.rating <= 1.75) {
         return [<FullStar key={1} />, <HalfStar key={2} />]
      } else if (props.rating > 1.75 && props.rating <= 2.25) {
         return [<FullStar key={1} />, <FullStar key={2} />]
      } else if (props.rating > 2.25 && props.rating <= 2.75) {
         return [<FullStar key={1} />, <FullStar key={2} />, <HalfStar key={3}/>]
      } else if (props.rating > 2.75 && props.rating <= 3.25) {
         return [<FullStar key={1} />, <FullStar key={2} />, <FullStar key={3}/>]
      } else if (props.rating > 3.25 && props.rating <= 3.75) {
         return [<FullStar key={1} />, <FullStar key={2} />, <FullStar key={3} />, <HalfStar key={4}/>]
      } else if (props.rating > 3.75 && props.rating <= 4.25) {
         return [<FullStar key={1} />, <FullStar key={2}/>, <FullStar key={3}/>, <FullStar key={4}/>]
      } else if (props.rating > 4.25 && props.rating <= 4.75) {
         return [<FullStar key={1} />, <FullStar key={2} />, <FullStar key={3} />, <FullStar key={4} />, <HalfStar key={5}/>]
      } else {
         return [<FullStar key={1} />, <FullStar key={2} />, <FullStar key={3} />, <FullStar key={4} />, <FullStar key={5}/>]
      }
   }
   

   return(
      renderRating()
   )
}

export default AttractionRating