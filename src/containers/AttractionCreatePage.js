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
import API from '../API'

const API_KEY = 'AIzaSyA1bhl9ZMN60VzP-Gp6wQttiVTSP3-d9e0'

export default class AttractionCreatePage extends Component {

   state = {
      attraction: {
         name: 'Somerset House',
         about_attraction: "Somerset House is a spectacular neo-classical building in the heart of London, sitting between the Strand and the River Thames. During summer months 55 fountains dance in the courtyard, and in winter you can skate on London's favourite ice rink. Somerset House also hosts open-air concerts and films, contemporary art, design and fashion exhibitions, family workshops and free guided tours of spaces usually hidden to visitors. The Trust's mission is to conserve and maintain Somerset House to the highest standards and to develop the site as a public space which is universally recognised as a world class visitor attraction and centre of excellence for culture and the arts.",
         address: 'The Strand, London WC2R 1LA, England',
         long: null,
         lat: null,
         dis_parking: '',
         car_park: 'There is no parking at this attraction.',
         accessibility: 'There is not level access into the venue. The intercom is in a suitable position to allow wheelchair users to gain access',
         door_type: 'The main doors open automatically and are double width',
         hearing_assistance: 'No hearing loops are installed and a member of staff trained in BSL skills is not generally on duty.',
         counter_height: 'The reception desk is 5m (16ft 5in) from the accessible entrance and the desk is low height',
         lifts: 'There is a lift for public use. The lift is located in the foyer past reception and is a standard lift. The floors which are accessible by this lift are -2, -1, 0, 1, 2 and 3.',
         chair_manouverability: 'Level floor generally within the attraction. Everywhere is accessible.',
         dis_toilets: 'There are accessible toilets within this venue designated for public use.',
         reduce_fees: 'This attraction is free to all customers.',
         staff_training: 'Staff do receive disability awareness / equality training and are Text Relay aware.',
         braille_doc: '',
         large_print_doc: '',
         mob_allowed: 'Motorised scooters are allowed in public parts of the venue.',
         additional_info: '',
         assistance_dogs: 'Yes you can bring an assistance dog into this attraction.'
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

   handleFormNav = () => {
      console.log('Navigate me')
   }

   renderMoreInfoError = message => {
      const moreInfoEl = document.querySelector('.more-info textarea');
      moreInfoEl.style.borderColor = 'red';
      moreInfoEl.style.boxShadow = '5px 5px 5px rgba(215, 44, 44, 0.6)';
      this.setState({ errorMessage: `Please supply additional information on your ${message}.`})
   }

   handleAllFormSubmit = event => {
      event.preventDefault();
      const { history } = this.props;
      const { attraction } = this.state;
      API.createAttr(attraction).then(data => {
         debugger
         history.push(`/attractions/${data.id}`)
      })
   }

   renderCorrectForm = () => {
      switch(this.state.formRendering){
         case 'General':
            return <AttrGeneral attraction={this.state.attraction} handleGeneralFormSubmit={this.handleGeneralFormSubmit} handleChange={this.handleChange} />
         case 'Accessibility':
            return <AttrAccess attraction={this.state.attraction} handleAccessFormSubmit={this.handleAccessFormSubmit} handleChange={this.handleChange} handleDisParkingClick={this.handleFormBtnClick} /> 
         case 'Facilities':
            return <AttrFac attraction={this.state.attraction} handleFacFormSubmit={this.handleFacFormSubmit} handleChange={this.handleChange} handleLiftsClick={this.handleLiftsClick} />
         case 'Accomodation':
            return <AttrAccom attraction={this.state.attraction} handleAccomFormSubmit={this.handleAccomFormSubmit} handleChange={this.handleChange} handleAccomClick={this.handleFormBtnClick} />
         default: 
            return <MoreInformation attraction={this.state.attraction} handleAllFormSubmit={this.handleAllFormSubmit} handleChange={this.handleChange} />
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