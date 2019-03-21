import React, { Component } from 'react';
import AttractionImage from '../components/AttractionImage';
import DisabledContent from '../components/DisabledContent';
import AttractionMap from './AttractionMap';
import Accessibility from '../components/disDetails/Accessibility'
import Accomodation from '../components/disDetails/Accomodation'
import Facilities from '../components/disDetails/Facilities'
import TubeStations from './TubeStations'
import ReviewContainer from './ReviewContainer'
// import Seperator from '../components/Seperator'

export default class AttractionShow extends Component {

   state = {
      stations: [],
      categorySelected: null,
      stationElSelectedId: null,
      stationElHoverId: null,
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
         el.style.background = ''
      })
      e.target.style.background = 'red'
      const category = e.target.innerText.toLowerCase();
      this.setState({
         categorySelected: category
      })
   }

   handleMouseLeaveDisabledContent = () => this.setState({stationElHoverId: null})

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
               </div>
            </div>
            <div className='attr-row2'>
               <DisabledContent 
                  attraction={attraction} 
                  handleCategorySelected={this.handleCategorySelected} 
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
            </div>
            <div className='attr-row3'>
               <ReviewContainer attractionId={attraction.id} />
            </div>
         </div>
      )
   }
} 