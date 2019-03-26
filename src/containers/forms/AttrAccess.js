import React, { Component } from 'react';

export default class AttrAccess extends Component {

   render() {
      return(
         <div className='form'>
            <div className='form-about'>
               Access Information
            </div>
            <form className='access' onSubmit={this.props.handleAccessFormSubmit}>
               <div className='parking'>
                  <div className='question middle'>Does your attraction have a car park on site?</div>
                  <div className='btn-yes'><button className='hover' onClick={this.props.handleDisParkingClick}>YES</button></div>
                  <div className='btn-no'><button className='hover' onClick={this.props.handleDisParkingClick}>NO</button></div>
                  <div className='more-info'>
                     <label className='middle'>If yes, what disabled facilities are they equipped with?</label>
                     <input type='textarea' name='car_park' placeholder='e.g. how many blue badge parkig spaces/distance from the main entrance?' onChange={this.props.handleChange} />
                  </div>
               </div>
               <div className='accessibility'>
                  <label className='middle'>How accessable is the main entrance and any alternative entrances?</label>
                  <input type='text' name='accessibility' placeholder='e.g. step free/level access?' onChange={this.props.handleChange} />
               </div>
               <div className='door-type'>
                  <label className='middle'>What type of door is there on entry to the building?</label>
                  <input type='textarea' name='door_type' placeholder='e.g. push/pull?' onChange={this.props.handleChange} />
               </div>
               <div className='counter'>
                  <label className='middle'>What is the height of the ticket/entry counter on entry to the attraction?</label>
                  <input type='textarea' name='counter_height' placeholder='e.g. Desk/counter is medium height (77cm-109cm) with a lower section below 76cm' onChange={this.props.handleChange} />
               </div>
               <div className='submit'>
                  <input type='submit' value='SUBMIT' />
               </div>
            </form>
         </div>
      )
   }

}