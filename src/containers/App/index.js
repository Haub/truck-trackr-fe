import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Login } from '../Login';
import './App.css';

export class App extends Component {
  constructor() {
    super()
    this.state = {
      login: true,
    }
  }

  componentDidMount(){
    if(!this.state.login){
      this.props.history.push('/login')
    }
  }


  
  render() {

    return (
      <div className='main'>
        <header>
          <h1 className='main-title'>TruckTrackr</h1>
        </header>
        <div className='content-holder'>
        <Route
          exact path='/login'
          component={ Login }
        />
        </div>
      </div>
    );
  }
}

export default withRouter(App);