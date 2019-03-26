import React, { Component } from 'react';
import '../attraction.css';
import AttrGeneral from './forms/AttrGeneral'
import AttrAccess from './forms/AttrAccess'
import AttrAccom from './forms/AttrAccom'
import AttrFac from './forms/AttrFac'
import ErrorMessage from '../components/ErrorMessage';

const API_KEY = 'AIzaSyA1bhl9ZMN60VzP-Gp6wQttiVTSP3-d9e0'

export default class AttractionCreatePage extends Component {

   state = {
      attraction: {
         name: '',
         about_attraction: '',
         address: '',
         long: null,
         lat: null,
         dis_parking: '',
         car_park: '',
         accessibility: '',
         door_type: '',
         hearing_assistance: '',
         counter_height: '',
         lifts: '',
         chair_manouverability: '',
         dis_toilets: '',
         reduce_fees: '',
         staff_training: '',
         braille_doc: '',
         large_print_doc: '',
         mob_allowed: '',
         additional_info: ''
      },
      generalFormSubmitted: true,
      accessFormSubmitted: false,
      facFormSubmitted: false,
      accomFormSubmitted: false,
      errorMessage: ''
   }

   handleChange = event => {
      this.setState({
         attraction: {
            ...this.state.attraction,
            [event.target.name]: event.target.value
         }
      })
   }

   handleGeneralFormSubmit = event => {
      event.preventDefault();
      const address = this.state.attraction.address;
      fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${API_KEY}`)
         .then(resp => resp.json())
         .then(data => {
            if(!data.error_message){
               this.setState({
                  attraction: {
                     ...this.state.attraction,
                     long: data.results[0].geometry.location.lng,
                     lat: data.results[0].geometry.location.lat
                  },
                  generalFormSubmitted: true,
                  errorMessage: ''
               })
            } else {
               this.setState({ errorMessage: 'The address you inputted does not exist' })
            }
         })
   }

   handleDisParkingClick = event => {
      event.preventDefault();
      const btn = event.target.parentElement;
      this.setState({
         attraction: {
            ...this.state.attraction,
            dis_parking: btn.className === 'btn-yes' ? true : false 
         }
      }) 
      const btnArr = Array.prototype.slice.call(event.target.parentElement.parentElement.children).slice(1,3)
      btnArr.forEach(el => {
         el.children[0].style.background = ''
      })
      event.target.style.background = 'steelblue'
   }

   renderCorrectForm = () => {
      if(this.state.generalFormSubmitted === false && this.state.accessFormSubmitted === false && this.state.facFormSubmitted === false && this.state.accomFormSubmitted === false){
         return <AttrGeneral handleGeneralFormSubmit={this.handleGeneralFormSubmit} handleChange={this.handleChange} />
      } else 
      if(this.state.generalFormSubmitted === true && this.state.accessFormSubmitted === false && this.state.facFormSubmitted === false && this.state.accomFormSubmitted === false){
         return <AttrAccess handleAccessFormSubmit={this.handleAccessFormSubmit} handleChange={this.handleChange} handleDisParkingClick={this.handleDisParkingClick}/> 
      } else
      if (this.state.generalFormSubmitted === true && this.state.accessFormSubmitted === true && this.state.facFormSubmitted === false && this.state.accomFormSubmitted === false) {
         return <AttrFac handleFacFormSubmit={this.handleGeneralFormSubmit} handleChange={this.handleChange} />
      } else
      if (this.state.generalFormSubmitted === true && this.state.accessFormSubmitted === true && this.state.facFormSubmitted === true && this.state.accomFormSubmitted === false) {
         return <AttrAccom handleAccomFormSubmit={this.handleGeneralFormSubmit} handleChange={this.handleChange} />
      }
   }

   render

   render() {
      return(
         <div id='attraction'>
            <div className='image'></div>
            <div className='form-container'>
               <div className='title'>
                  ACCESSABLED
               </div>
               <div className='error-message'>
                  { this.state.errorMessage ? this.state.errorMessage : null }
               </div>
               { this.renderCorrectForm() }
               <div className='link'>
                  LINKIE
               </div>
            </div>
         </div>
      )
   }
}