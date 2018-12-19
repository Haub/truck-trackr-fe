import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Login.css';

export class Login extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      password: '',
      signUp: false
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
    return(
      <div className='login-container'>
        <main className='login'>
          <form className='login-form' onSubmit={this.handleSubmit}>
            <input className='email-input' name='email' type='email' placeholder='Email' onChange={this.handleKeyPress} />
            <input className='password-input' name='password' type='password' placeholder='Password' onChange={this.handleKeyPress} />
            <button className='signin-button'>Sign In</button>
          </form>
          <button onClick={this.toggleSignUp}>First Time Here? Sign Up!</button>
        </main>
      </div>

    )
  }
}