import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Login } from '../Login';
import './App.css';
import { types } from 'util';

class App extends Component {
  constructor() {
    super()
    this.state = {
      login: false
    }
  }

  render() {
    return (
      <div className='main'>
        <header>
          <h1 className='main-title'>TruckTrackr</h1>
        </header>
        <div className='content-holder'>
        <Login />
        </div>
      </div>
    );
  }
}

export default App;