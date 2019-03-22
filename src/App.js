import React, { Component } from 'react';
import './App.css';
import {
  withRouter,
  Switch,
  Route
} from 'react-router-dom';

import NavBar from './containers/NavBar'
import NavBarHome from './containers/NavBarHome'
import AttractionContainer from './containers/AttractionContainer'
import AttractionShow from './containers/AttractionShow'
import SearchBar from './containers/SearchBar'
import Banner from './components/Banner'
import LoginPage from './containers/signUp/LoginPage'
import CreateAccount from './containers/signUp/CreateAccountPage'
import ProfilePage from './containers/ProfilePage'


class App extends Component {

  state = {
    user: {
      username: '',
      id: null
    },
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

  renderHomePage = () => (
    <div className="App">
      {localStorage.token ? <NavBar handleSignOut={this.handleSignOut} userId={this.state.user.id} /> : <NavBarHome /> }
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
          {localStorage.token ? <NavBar handleSignOut={this.handleSignOut} userId={this.state.user.id} /> : <NavBarHome /> }
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
      </Switch>
    );
  }
}

export default withRouter(App);
