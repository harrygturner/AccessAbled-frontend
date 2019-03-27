import React, { Component } from 'react';
import '../attraction.css';
import AttrGeneral from './forms/AttrGeneral';
import AttrAccess from './forms/AttrAccess';
import AttrAccom from './forms/AttrAccom';
import AttrFac from './forms/AttrFac';
import MoreInformation from './forms/MoreInformation';
import Logo from '../images/logo.png';
import FormPosition from '../components/FormPosition';
import Image from '../images/attraction.jpg'

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
      liftsInstalled: null,
      formRendering: 'General',
      errorMessage: '',
      stage: 0,
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
                  formRendering: 'Accessibility',
                  errorMessage: '',
                  stage: 1,
               })
            } else {
               this.setState({ errorMessage: 'The address you inputted does not exist' })
            }
         })
   }

   handleFormBtnClick = event => {
      event.preventDefault();
      const btn = event.target.parentElement.className.split(' ');
      this.setState({
         attraction: {
            ...this.state.attraction,
            [btn[0]]: btn.includes('btn-yes') ? true : false 
         }
      }) 
      const btnArr = Array.prototype.slice.call(event.target.parentElement.parentElement.children).slice(1,3)
      btnArr.forEach(el => {
         el.children[0].style.background = ''
      })
      event.target.style.background = 'steelblue'
   }

   handleAccessFormSubmit = event => {
      event.preventDefault();
      const { attraction } = this.state
      if(attraction.dis_parking === true || attraction.dis_parking === false){
         if(attraction.dis_parking && !attraction.car_park){
            this.renderMoreInfoError('disabled parking facilities');
         } else
         if(!attraction.dis_parking) {
            this.setState({ 
               attraction: {
                  ...this.state.attraction,
                  car_park: false
               },
               formRendering: 'Facilities',
               errorMessage: '',
               stage: 2
            })
         } else {
            this.setState({
               formRendering: 'Facilities',
               errorMessage: '',
               stage: 2
            })
         }    
      } else {
         this.setState({ errorMessage: `Please select either YES/NO!` })
      }
   }

   handleLiftsClick = event => {
      const btnArr = Array.prototype.slice.call(event.target.parentElement.parentElement.children).slice(1, 3)
      btnArr.forEach(el => {
         el.children[0].style.background = ''
      })
      event.target.style.background = 'steelblue'
      const btn = event.target.parentElement;
      this.setState({
         liftsInstalled: btn.className === 'btn-yes' ? true : false
      }) 
   }

   handleFacFormSubmit = event => {
      event.preventDefault();
      const { attraction } = this.state
      if (this.state.liftsInstalled || this.state.liftsInstalled === false) {
         if (this.state.liftsInstalled && !attraction.lifts) {
            this.renderMoreInfoError('lift accessibility');
         } else
            if (!this.state.liftsInstalled) {
               this.setState({
                  attraction: {
                     ...this.state.attraction,
                     lifts: 'No lifts are available within the attraction.'
                  },
                  formRendering: 'Accomodation',
                  errorMessage: '',
                  stage: 3
               })
            } else {
               this.setState({
                  formRendering: 'Accomodation',
                  errorMessage: '',
                  stage: 3
               })
            }
      } else {
         this.setState({ errorMessage: `Please select either YES/NO!` })
      }
   }

   handleAccomFormSubmit = event => {
      event.preventDefault();
      const { attraction } = this.state;
      if(attraction.braille_doc !== '' || attraction.large_print_doc !== ''){
         if(attraction.braille === ''){
            this.setState({ errorMessage: `Please specifiy if you supply documents in braille`})
         } else if(attraction.large_print_doc === ''){
            this.setState({ errorMessage: `Please specifiy if you supply documents in large print` })
         } else {
            this.setState({
               formRendering: 'Submit',
               errorMessage: '',
               stage: 4
            })
         }
      } else {
         this.setState({ errorMessage: `Please select either YES/NO!` })
      }
   }

   handleFormNav = event => {
      debugger
   }

   renderMoreInfoError = message => {
      const moreInfoEl = document.querySelector('.more-info textarea');
      moreInfoEl.style.borderColor = 'red';
      moreInfoEl.style.boxShadow = '5px 5px 5px rgba(215, 44, 44, 0.6)';
      this.setState({ errorMessage: `Please supply additional information on your ${message}.`})
   }

   handleAllFormSubmit = event => {
      event.preventDefault();
      console.log(this.state.attraction)
   }

   renderCorrectForm = () => {
      switch(this.state.formRendering){
         case 'General':
            return <AttrGeneral handleGeneralFormSubmit={this.handleGeneralFormSubmit} handleChange={this.handleChange} />
         case 'Accessibility':
            return <AttrAccess handleAccessFormSubmit={this.handleAccessFormSubmit} handleChange={this.handleChange} handleDisParkingClick={this.handleFormBtnClick} /> 
         case 'Facilities':
            return <AttrFac handleFacFormSubmit={this.handleFacFormSubmit} handleChange={this.handleChange} handleLiftsClick={this.handleLiftsClick} />
         case 'Accomodation':
            return <AttrAccom handleAccomFormSubmit={this.handleAccomFormSubmit} handleChange={this.handleChange} handleAccomClick={this.handleFormBtnClick} />
         default: 
            return <MoreInformation handleAllFormSubmit={this.handleAllFormSubmit} handleChange={this.handleChange} />
      }
   }

   render() {
      return(
         <div id='attraction'>
            <div className='image'><img src={Image} alt='Big Ben' /></div>
            <div className='form-container'>
               <div className='title'>
                  <img src={Logo} alt='AccessAbled Logo' />
               </div>
               <div className='error-message'>
                  { this.state.errorMessage ? this.state.errorMessage : null }
               </div>
               { this.renderCorrectForm() }
               <FormPosition stage={this.state.stage} handleFormNav={this.handleFormNav} />
            </div>
         </div>
      )
   }
}