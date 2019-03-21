import React, { Component } from 'react';
import './App.css';
import {
  withRouter,
  Switch,
  Route
} from 'react-router-dom';

import NavBar from './containers/NavBar'
import AttractionContainer from './containers/AttractionContainer'
import AttractionShow from './containers/AttractionShow'
import SearchBar from './containers/SearchBar'
import Banner from './components/Banner'

class App extends Component {

  state = {
    attractions: [],
    attractionSelectedId: null,
    accessibleStations: [],
    searchQuery: ''
  }

  componentDidMount() {
    fetch('http://localhost:3000/attractions')
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          attractions: data
        })
      })
      .then(fetch('http://localhost:3000/accessible_stations')
        .then(resp => resp.json())
        .then(accessibleStations => {
          this.setState({
            accessibleStations
          })
        })
      )
  }
  
  handleAttractionSelection = (id) => {
    this.setState({
      attractionSelectedId: id
    })
  }

  searchQuery = (event) => {
    this.setState({
      searchQuery: event.target.value.toLowerCase()
    })
  }

  renderHomePage = () => (
    <div className="App">
      <NavBar />
      <Banner />
      <SearchBar searchQuery={this.searchQuery} />
      <div id='attractions'>
        <AttractionContainer 
          attractions={this.state.attractions.filter(attraction => attraction.name.toLowerCase().includes(this.state.searchQuery))} 
          handleAttractionSelection={this.handleAttractionSelection} 
        />
      </div>
    </div>
  )

  renderAttractionSelected = (props) => {
    if (this.state.attractionSelectedId) {
      return (
        <div className="App">
          <NavBar />
          <AttractionShow 
            attraction={this.state.attractions.find(attraction => attraction.id === this.state.attractionSelectedId)}
            accessibleStations={this.state.accessibleStations}
            {...props} 
          />
        </div>
      )
    } else {
      this.props.history.push('/')
      return <div></div>
    }
  }


  render() {
    return (
      <Switch>
        <Route exact path='/' component={this.renderHomePage} />
        <Route path='/attractions/:id' component={routerProps => this.renderAttractionSelected(routerProps)} />
      </Switch>
    );
  }
}

export default withRouter(App);
