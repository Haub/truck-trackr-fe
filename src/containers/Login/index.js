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

  render() {
    return(
      <div className='login-container'>
        <main className='login'>
          <form className='login-form'>
            <input className='email-input' name='email' type='email' placeholder='Email' onChange={this.handleKeyPress} />
            <input className='password-input' name='password' type='password' placeholder='Password' onChange={this.handleKeyPress} />
            <button className='signin-button'>Sign In</button>
          </form>
          <h3 className='register'>If you don't have an account, Register here!</h3>
        </main>
      </div>

    )
  }
}