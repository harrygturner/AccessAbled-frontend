import React, { Component } from 'react';

export default class AttrAccom extends Component {

   render() {
      return(
         <div className='form'>
            <div className='form-about'>
               <div className='title'>Accomodation Information</div>
               <div className='content'>
               </div>
            </div>
            <form className='accom' onSubmit={this.props.handleAccomFormSubmit}>
               <div className='braille'>
                  <div className='question middle'>Do you supply documentation in braille?</div>
                  <div className='braille_doc btn-yes'><button type='button' className='hover' onClick={this.props.handleAccomClick}>YES</button></div>
                  <div className='braille_doc btn-no'><button type='button' className='hover' onClick={this.props.handleAccomClick}>NO</button></div>
               </div>
               <div className='large_print'>
                  <div className='question middle'>Do you supply documentation in large print?</div>
                  <div className='large_print_doc btn-yes'><button type='button' className='hover' onClick={this.props.handleAccomClick}>YES</button></div>
                  <div className='large_print_doc btn-no'><button type='button' className='hover' onClick={this.props.handleAccomClick}>NO</button></div>
               </div>
               <div className='mobs half'>
                  <label className='middle'>Are mobility scooters permitted? If yes, what type?</label>
                  <textarea required name='mob_allowed' placeholder='e.g. width/class?' onChange={this.props.handleChange} />
               </div>
               <div className='dogs half'>
                  <label className='middle'>What is your policy towards assistance dogs?</label>
                  <textarea required name='assistance_dogs' placeholder='e.g. are they permitted within attraction?' onChange={this.props.handleChange} />
               </div>
               <div className='fees half'>
                  <label className='middle'>What rate do you charge disabled customers?</label>
                  <textarea required name='reduce_fees' placeholder='e.g. are carers allowed in for free, what documentation is needed, etc.?' onChange={this.props.handleChange} />
               </div>
               <div className='staff half'>
                  <label className='middle'>Do staff receive any specific training?</label>
                  <textarea required name='staff_training' placeholder='e.g. equality/awareness/sign language?' onChange={this.props.handleChange} />
               </div>
               <div className='submit'>
                  <input type='submit' value='SUBMIT' />
               </div>
            </form>
         </div>
      )
   }

}