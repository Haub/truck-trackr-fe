import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Login } from '../Login';
import './App.css';

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
        <Login />
      </div>
    );
  }
}

export default App;