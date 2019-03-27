import React, { Component } from 'react';

export default class AttrFac extends Component {

   render() {
      return(
         <div className='form'>
            <div className='form-about'>
               <div className='title'>Facilities Information</div>
               <div className='content'>
               </div>
            </div>
            <form className='facilities' onSubmit={this.props.handleFacFormSubmit}>
               <div className='lifts'>
                  <div className='question middle'>Are lifts installed in the attraction?</div>
                  <div className='btn-yes'><button type='button' className='hover' onClick={this.props.handleLiftsClick}>YES</button></div>
                  <div className='btn-no'><button type='button' className='hover' onClick={this.props.handleLiftsClick}>NO</button></div>
                  <div className='more-info'>
                     <label className='middle'>If yes, please supply additional information about them?</label>
                     <textarea name='lifts' placeholder='e.g. how accessible are they, etc.?' onChange={this.props.handleChange} />
                  </div>
               </div>
               <div className='dis_toilets half'>
                  <label className='middle'>Disabled toilets facilities?</label>
                  <textarea name='dis_toilets' placeholder='e.g. where are they located/solely for disabled use?' onChange={this.props.handleChange} required />
               </div>
               <div className='hearing half'>
                  <label className='middle'>What facilities are inplace to accomadate customers who have experienced hearing loss?</label>
                  <textarea name='hearing_assistance' placeholder='e.g. hearing loops fiited/sign language tours?' onChange={this.props.handleChange} required />
               </div>
               <div className='chair half'>
                  <label className='middle'>Is your attraction wheelchair friendly?</label>
                  <textarea name='chair_manouverability' placeholder='e.g. wide corridors/level floors/wheelchairs available for hire?' onChange={this.props.handleChange} required />
               </div>
               <div className='submit'>
                  <input type='submit' value='SUBMIT' />
               </div>
            </form>
         </div>
      )
   }

}