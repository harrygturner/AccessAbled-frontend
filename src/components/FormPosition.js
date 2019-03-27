import React from 'react';

const FormPosition = props => {

   const incomplete = <i className="far fa-circle"></i>
   const complete = <i className="fas fa-check-circle" style={{ color: 'steelblue' }}></i>
   const completeLine = <hr style={{ color: 'steelblue' }} />
   const { stage } = props;

   return(
      <div className='link'>
         <div className='stages'>
            <div className='stage' onClick={props.handleFormNav}>
               General
            </div>
            <div className='stage' onClick={props.handleFormNav}>
               Accessibility
            </div>
            <div className='stage' onClick={props.handleFormNav}>
               Facilities
            </div>
            <div className='stage' onClick={props.handleFormNav}>
               Accomodation
            </div>
            <div className='stage' onClick={props.handleFormNav}>
               Submit
            </div>
         </div>
         <div className='animation'>
            <div className='line'>{completeLine}</div>
            <div className='icon'>{stage > 0 ? complete : incomplete}</div>
            <div className='line'>{stage > 0 ? completeLine: <hr />}</div>
            <div className='icon'>{stage > 1 ? complete : incomplete}</div>
            <div className='line'>{stage > 1 ? completeLine: <hr />}</div>
            <div className='icon'>{stage > 2 ? complete : incomplete}</div>
            <div className='line'>{stage > 2 ? completeLine: <hr />}</div>
            <div className='icon'>{stage > 3 ? complete : incomplete}</div>
            <div className='line'>{stage > 3 ? completeLine: <hr />}</div>
            <div className='icon'>{stage > 4 ? complete : incomplete}</div>
            <div className='line'>{stage > 4 ? completeLine: <hr />}</div>
         </div>
      </div>
   )
}

export default FormPosition