import React, { Component } from 'react';

export default class AttrGeneral extends Component {

   render() {
      return(
         <div className='form'>
            <div className='form-about'>
               <div className='title'>General Information</div>
               <div className='content'>
                  Please fill out the following form without all the relevant information in order to become part of the Accessabled family
               </div>
            </div>
            <form className='general' onSubmit={this.props.handleGeneralFormSubmit}>
               <div className='name'>
                  <input type='text' name='name' placeholder='Attraction Name' onChange={this.props.handleChange} required />
               </div>
               <div className='about'>
                  <textarea name='about_attraction' rows='5' cols='30' placeholder='About' onChange={this.props.handleChange} required />
               </div>
               <div className='address'>
                  <input type='text' name='address' placeholder='Address' onChange={this.props.handleChange} required />
               </div>
               <div className='submit'>
                  <input type='submit' value='SUBMIT' />
               </div>
            </form>
         </div>
      )
   }

}