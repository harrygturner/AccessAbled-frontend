import React, { Component } from 'react';
import './App.css';
import {
  withRouter,
  Switch,
  Route
} from 'react-router-dom';

import NavBar from './containers/NavBar'
import NavBarHome from './containers/NavBarHome'
import NavBarSearch from './containers/NavBarSearch'
import AttractionContainer from './containers/AttractionContainer'
import AttractionShow from './containers/AttractionShow'
import Banner from './components/Banner'
import LoginPage from './containers/signUp/LoginPage'
import CreateAccount from './containers/signUp/CreateAccountPage'
import ProfilePage from './containers/ProfilePage'
import NavBarHomeWithoutSearch from './components/NavBarHomeWithoutSearch'
import NavBarUserWithoutSearch from './components/NavBarUserWithoutSearch'
import API from './API';
import AttractionCreatePage from './containers/AttractionCreatePage'

class App extends Component {

  state = {
    user: {
      username: '',
      id: null
    },
    attractions: [],
    attractionSelectedId: null,
    accessibleStations: [],
    searchQuery: '',
    searchBtnClicked: false,
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
      .then(API.validate()
        .then(resp => {
          if(!resp.error){
            this.setState({
              user: {
                username: resp.username,
                id: resp.id
              }
            })
          }
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

  handleSignOut = () => {
    localStorage.removeItem('token');
    this.setState({
      user: {
        username: '',
        id: null,
      }
    })
    this.props.history.push('/')
  }

  handleSearchBtnClick = () => this.setState({ searchBtnClicked: true })

  handleSortByClick = () => {
    console.log('hi')
  }

  cancelSearch = () => this.setState({ searchBtnClicked: false, searchQuery: '' })

  renderNavBarWithSearch = () => this.state.searchBtnClicked ? <NavBarSearch searchQuery={this.searchQuery} cancelSearch={this.cancelSearch} handleSortByClick={this.handleSortByClick} /> : <NavBarHome handleSearchBtnClick={this.handleSearchBtnClick} /> 

  renderUserNavBarWithSearch = () => this.state.searchBtnClicked ? <NavBarSearch searchQuery={this.searchQuery} cancelSearch={this.cancelSearch} handleSortByClick={this.handleSortByClick} /> : <NavBar handleSearchBtnClick={this.handleSearchBtnClick} handleSignOut={this.handleSignOut} userId={this.state.user.id} />   

  renderHomePage = () => (
    <div className="App">
      {localStorage.token ? this.renderUserNavBarWithSearch() : this.renderNavBarWithSearch() }
      <Banner />
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
        {localStorage.token ? <NavBarUserWithoutSearch handleSignOut={this.handleSignOut} userId={this.state.user.id} /> : <NavBarHomeWithoutSearch /> }
          <AttractionShow 
            attraction={this.state.attractions.find(attraction => attraction.id === this.state.attractionSelectedId)}
            accessibleStations={this.state.accessibleStations}
            userId={this.state.user.id}
            {...props} 
          />
        </div>
      )
    } else {
      this.props.history.push('/')
      return <div></div>
    }
  } 

  loginUser = user => {
    localStorage.setItem('token', user.token);
    this.setState({
      user: {
        username: user.username,
        id: user.id
      }
    });
  }

  render() {
    return (
      <Switch>
        <Route exact path='/' component={this.renderHomePage} />
        <Route path='/attractions/:id' component={routerProps => this.renderAttractionSelected(routerProps)} />
        <Route path='/login' component={routerProps => <LoginPage loginUser={this.loginUser} {...routerProps} />} />
        <Route path='/create_account' component={routerProps => <CreateAccount loginUser={this.loginUser} {...routerProps} />} />
        <Route path='/user/:id' component={routerProps => <ProfilePage user={this.state.user} {...routerProps} /> } />
        <Route path='/attraction' component={routerProps => <AttractionCreatePage {...routerProps} />} />
      </Switch>
    );
  }
}

export default withRouter(App);
