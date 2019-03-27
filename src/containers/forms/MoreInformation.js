import React, { Component } from 'react';

export default class MoreInformation extends Component {

   render() {
      return(
         <div className='form'>
            <div className='form-about'>
               <div className='title'>More Information</div>
               <div className='content'>
               </div>
            </div>
            <form className='more-info' onSubmit={this.props.handleAllFormSubmit}>
               <div className='info half'>
                  <label className='middle'>Please supply any additional information about the attraction here:</label>
                  <textarea rows='5' cols='30' name='additional_info' onChange={this.props.handleChange} />
               </div>
               <div className='submit'>
                  <input type='submit' value='SUBMIT' />
               </div>
            </form>
         </div>
      )
   }

}