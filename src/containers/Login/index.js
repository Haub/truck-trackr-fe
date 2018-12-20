import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import './Login.css';

export class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      signUp: false,
      locationType: '',
      businessName: '',
      address: '',
      phoneNumber: '',
      contactName: '',
      foodType: '',
    }
  }

  handleKeyPress = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  toggleSignUp = () => {
    let newSignUp = !this.state.signUp;
    this.setState({signUp: newSignUp})
  }

  render() {
    const { signUp, locationType } = this.state
    let showFoodType

    if( signUp && locationType === 'food-truck' ){
      showFoodType = true
    }

    return(
        <main className='login'>
          <form className='login-form' onSubmit={this.handleSubmit}>
            <input className='email-input' name='email' type='email' placeholder='Email' onChange={this.handleKeyPress} />
            <input className='password-input' name='password' type='password' placeholder='Password' onChange={this.handleKeyPress} />
            <input className={ signUp ? 'business-name-input' : 'hidden' } name='businessName' placeholder='Business Name' onChange={this.handleKeyPress} />
            <input className={ signUp ? 'address-input' : 'hidden' } name='address' placeholder='Address/City Located' onChange={this.handleKeyPress} />
            <input className={ signUp ? 'phone-number-input' : 'hidden' } name='phoneNumber' placeholder='Phone Number' onChange={this.handleKeyPress} />
            <input className={ signUp ? 'contact-name-input' : 'hidden' } name='contactName' placeholder='Contact Name' onChange={this.handleKeyPress} />
            <input className={ showFoodType ? 'food-type-input' : 'hidden' } name='foodType' placeholder='Food Type' onChange={this.handleKeyPress} />
            <p className={ signUp ? 'business-type' : 'hidden' }>What Type of Business:</p>
            <div className='button-holder'>
              <input className={ signUp ? 'food-truck-radio' : 'hidden' } type='radio' name='locationType' value='food-truck' id='food-truck-button' onChange={this.handleKeyPress} />
              <label className={ signUp ? 'food-truck-label' : 'hidden' } for='food-truck-button'>Food Truck</label>
              <input className={ signUp ? 'brewery-radio' : 'hidden' } type='radio' name='locationType' value='brewery' id='brewery-button'onChange={this.handleKeyPress} />
              <label className={ signUp ? 'brewery-label' : 'hidden' } for='brewery-button'>Brewery</label>
            </div>
            <button className='signin-button'>{ signUp ? 'Sign Up' : 'Sign In' }</button>
          </form>
          <button className='signup-button' onClick={this.toggleSignUp}>{ signUp ? 'Actually I already have an account' : 'First Time Here? Sign Up!'}</button>
        </main>
    )
  }
}

export default Login