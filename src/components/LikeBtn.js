import React from 'react';

const LikeBtn = (props) => {
   return(
      <div className='like-btn'>
         <button onClick={props.submitLike}><i className="fas fa-thumbs-up"></i> Thank {props.username}</button>
      </div>
   )
}

export default LikeBtn