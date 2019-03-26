import React, { Component } from 'react';

export default class AttrAccom extends Component {

   render() {
      return(
         <div className='form'>
            <div className='form-about'>
               Accomodate Information
            </div>
            <form className='general' onSubmit={this.props.handleGeneralFormSubmit}>
               <div className='name'>
                  <input type='text' name='name' placeholder='Attraction Name' onChange={this.props.handleChange} />
               </div>
               <div className='about'>
                  <input type='textarea' name='about_attraction' placeholder='About' onChange={this.props.handleChange} />
               </div>
               <div className='address'>
                  <input type='text' name='address' placeholder='Address' onChange={this.props.handleChange} />
               </div>
               <div className='submit'>
                  <input type='submit' value='SUBMIT' />
               </div>
            </form>
         </div>
      )
   }

}