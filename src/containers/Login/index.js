import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import './Login.css';


export class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      passwordOne: '',
      signUp: false,
      locationType: '',
      businessName: '',
      address: '',
      phoneNumber: '',
      contactName: '',
      foodType: '',
      logo: null
    }
  }

  handleKeyPress = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    const { username, email, passwordOne, signUp } = this.state;
      if(signUp){
      this.props.firebase
        .doCreateUserWithEmailAndPassword(email, passwordOne)
        .then(authUser => {
          this.props.history.push('/');
        })
        .catch(error => {
          this.setState({ error });
        });
    } else {
      this.props.firebase
        .doSignInWithEmailAndPassword(email, passwordOne)
        .then(authUser => {
          this.props.history.push('/')
        })
        .catch(error => {
          this.setState({ error })
        })
    }
  }

  toggleSignUp = () => {
    let newSignUp = !this.state.signUp;
    this.setState({signUp: newSignUp})
  }

  fileChangedHandler = (event) => {
    this.setState({
      logo: event.target.files[0]
    })
  }

  uploadHandler = () => { 
    console.log(this.state.logo)
    
    // const formData = new FormData()
    // formData.append('myFile', this.state.logo, this.state.logo.name)
    // axios.post('my-domain.com/file-upload', formData)
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
            <input className='password-input' name='passwordOne' type='password' placeholder='Password' onChange={this.handleKeyPress} />
            <input className={ signUp ? 'business-name-input' : 'hidden' } name='businessName' placeholder='Business Name' onChange={this.handleKeyPress} />
            <input className={ signUp ? 'address-input' : 'hidden' } name='address' placeholder='Address/City Located' onChange={this.handleKeyPress} />
            <input className={ signUp ? 'phone-number-input' : 'hidden' } name='phoneNumber' placeholder='Phone Number' onChange={this.handleKeyPress} />
            <input className={ signUp ? 'contact-name-input' : 'hidden' } name='contactName' placeholder='Contact Name' onChange={this.handleKeyPress} />
            <input className={ showFoodType ? 'food-type-input' : 'hidden' } name='foodType' placeholder='Food Type' onChange={this.handleKeyPress} />
            <p className={ signUp ? 'business-type' : 'hidden' }>What Type of Business:</p>
            <div className='button-holder'>
              <input className={'food-truck-radio'} type='radio' name='locationType' value='food-truck' id='food-truck-button' onChange={this.handleKeyPress} />
              <label className={'food-truck-label'} htmlFor='food-truck-button'>Food Truck</label>
              <input className={'brewery-radio'} type='radio' name='locationType' value='brewery' id='brewery-button'onChange={this.handleKeyPress} />
              <label className={'brewery-label'} htmlFor='brewery-button'>Brewery</label>
            </div>
            <input className={ signUp ? 'logo-input' : 'hidden' } name='logo' placeholder='Upload logo' onChange={this.handleKeyPress} type='file' />
            <button className={ signUp ? 'logo-button' : 'hidden' } onClick={this.uploadHandler}>Upload!</button>
            <button className='signin-button' onClick={this.handleSubmit}>{ signUp ? 'Sign Up' : 'Sign In' }</button>
          </form>
          <button className='signup-button' onClick={this.toggleSignUp}>{ signUp ? 'Actually I already have an account' : 'First Time Here? Sign Up!'}</button>
        </main>
    )
  }
}

export default withRouter(Login)