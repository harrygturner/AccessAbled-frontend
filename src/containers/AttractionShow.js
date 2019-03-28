import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

import AttractionImage from '../components/AttractionImage';
import DisabledContent from '../components/DisabledContent';
import AttractionMap from './AttractionMap';
import Accessibility from '../components/disDetails/Accessibility'
import Accomodation from '../components/disDetails/Accomodation'
import Facilities from '../components/disDetails/Facilities'
import TubeStations from './TubeStations'
import ReviewContainer from './ReviewContainer'
import DisabledContentList from '../components/DisabledContentList'
import SideNav from '../components/SideNav'
import ReviewCatList from '../components/ReviewCatList'
import API from '../API'

export default class AttractionShow extends Component {

   state = {
      stations: [],
      categorySelected: null,
      stationElSelectedId: null,
      stationElHoverId: null,
      reviewListRendering: true,
      errorMessage: '',
   }

   componentDidMount() {
      const attraction_id = this.props.attraction.id;
      fetch(`http://localhost:3000/attraction_stations/${attraction_id}`)
         .then(resp => resp.json())
         .then(stations => {
            this.setState({
               stations
            })
         })
      const underLineEl = [document.querySelector('.dis-cat.one'), document.querySelector('.review-cat.one')];
      underLineEl.forEach( el => el.style.borderBottom = 'solid 2px steelblue');
      window.scrollTo({
         top: 0,
         left: 0,
         behaviour: 'smooth'
      });
   }

   handleStationElClick = (id) => {
      this.setState({
         stationElSelectedId: id
      })
   }

   handleStationElHover = event => {
      event.stopPropagation()
      const stationId = event.target.dataset.id
      this.setState({
         stationElHoverId: stationId
      })
   }

   handleCategorySelected = e => {
      const arr = Array.prototype.slice.call(e.target.parentElement.children)
      arr.forEach(el => {
         el.style.borderBottom = ''
      })
      e.target.style.borderBottom = 'solid 2px steelblue'
      const category = e.target.innerText.toLowerCase();
      this.setState({
         categorySelected: category
      })
   }

   handleMouseLeaveDisabledContent = () => this.setState({stationElHoverId: null})

   handleReviewViewClick = event => {
      event.persist();
      API.validate()
         .then(resp => {
            if (resp.error) {
               this.setState({
                  reviewListRendering: event.target.className.includes('form') ? false : true,
                  errorMessage: resp.error
               })
            } else {
               this.setState({
                  reviewListRendering: event.target.className.includes('form') ? false : true
               })
            }
            const arr = Array.prototype.slice.call(event.target.parentElement.children)
            arr.forEach(el => {
               el.style.borderBottom = ''
            })
            event.target.style.borderBottom = 'solid 2px steelblue'
         }
         )
   }

   // ------------------- on sidenav click renders new scroll position --------------------

   scrollToNewPosition = event => {
      event.preventDefault();
      switch(event.target.parentElement.className){
         case 'access':
            window.scrollTo({
               top: 680, 
               left: 0,
               behaviour: 'smooth'
            });
            break;
         case 'about':
            window.scrollTo({
               top: 0,
               left: 0,
               behaviour: 'smooth'
            });
            break;
         case 'reviews':
            window.scrollTo({
               top: 1800,
               left: 0,
               behaviour: 'smooth'
            });
            break;
         default:
            window.scrollTo({
               top: 0,
               left: 0,
               behaviour: 'smooth'
            })
      }
   }

   renderAllReviews = () => this.setState({ reviewListRendering: true })

   renderDisabledContent = () => {
      const attraction = this.props.attraction
      switch (this.state.categorySelected) {
         case 'accessibility':
            return <Accessibility attraction={attraction} />;
         case 'facilities':
            return <Facilities attraction={attraction} />;
         case 'accomodation':
            return <Accomodation attraction={attraction} />;
         case 'tube stations':
            return <TubeStations 
                     stations={this.state.stations} 
                     accessibleStations={this.props.accessibleStations} 
                     handleStationElClick={this.handleStationElClick}
                     handleStationElHover={this.handleStationElHover}
                  />;
         default:
            return <Accessibility attraction={attraction} />;
      }
   }

   render(){ 
      const attraction = this.props.attraction
      
      return(
         <div id='show-page'>
            <div id='attraction-show'>
               <Fade top big opposite>
               <div className='attr-row1'>
                  <AttractionImage attraction={attraction} />
                  <div className='attr-content'>
                     <div className='heading'>
                        {attraction.name}
                     </div>
                     <div className='description'>
                        {attraction.about_attraction}
                     </div>
                     <div className='address'>
                        Address: {attraction.address}
                     </div>
                  </div>
                  <SideNav scrollToNewPosition={this.scrollToNewPosition} />
               </div>
               </ Fade>
            </div>
            <div id='accessibility'>
               <Fade top big opposite>
                  <div className='attr-row2'>
                     <DisabledContentList handleCategorySelected={this.handleCategorySelected} />
                     <DisabledContent 
                        attraction={attraction} 
                        renderDisabledContent={this.renderDisabledContent} 
                        handleMouseLeaveDisabledContent={this.handleMouseLeaveDisabledContent}
                     />
                     <AttractionMap 
                        stations={this.state.stations} 
                        attraction={attraction} 
                        handleStationMarkerClick={this.handleStationMarkerClick} 
                        stationSelecetedId={this.state.stationElSelectedId}
                        stationHoverId={this.state.stationElHoverId}
                     />
                     <SideNav scrollToNewPosition={this.scrollToNewPosition} />
                  </div>
               </Fade>
            </div>
            <div id='review-cont'> 
               <Fade top big opposite>          
                  <div className='attr-row3'>
                     <ReviewCatList handleReviewViewClick={this.handleReviewViewClick} />
                     <ReviewContainer 
                        userId={this.props.userId}
                        reviewListRendering={this.state.reviewListRendering}
                        errorMessage={this.state.errorMessage}
                        renderAllReviews={this.renderAllReviews}
                        attractionId={attraction.id}
                     />
                     <SideNav scrollToNewPosition={this.scrollToNewPosition} />
                  </div>
               </Fade>
            </div>
         </div>
      )
   }
} 