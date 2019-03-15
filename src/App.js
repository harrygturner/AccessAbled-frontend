import React, { Component } from 'react';
import './App.css';
import {
  withRouter,
  Switch,
  Route
} from 'react-router-dom';


import NavBar from './containers/NavBar'
import AttractionContainer from './containers/AttractionContainer'
import Banner from './components/Banner'

class App extends Component {

  state = {
    attractions: [],
  }

  componentDidMount() {
    fetch('http://localhost:3000/attractions')
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          attractions: data
        })
      })
  }

  renderHomePage = () => (
    <div>
      <Banner />
      <div id='attractions'>
        < AttractionContainer attractions={this.state.attractions} handleAttractionSelected={this.handleAttractionSelected} />
      </div>
    </div>
  )

  render() {
    return (
      <Switch>
        <div className="App">
          < NavBar />
          {this.renderHomePage()}
        </div>
      </Switch>
    );
  }
}

export default App;
