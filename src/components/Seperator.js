import React from 'react';

const Seperator = (props) => {
   return(
      <div className='seperator'>
         <div className="line"><hr /></div>
         <div className="textbox">
            <div className="text">{props.title}</div>
         </div>
         <div className='line'><hr /></div>
      </div>
   )
}

export default Seperator