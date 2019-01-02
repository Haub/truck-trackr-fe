import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { SignUpPage } from '../../components/SignUpPage';
import { BusinessContainer } from '../../components/BusinessContainer';
import './App.css';
import hamburger from '../../assets/hamburger.svg';
import { ProfilePage } from '../ProfilePage';
import NavBar from '../NavBar';
import truck from '../../assets/food-truck.png';
import barrel from '../../assets/barrel-icon-new.png';
import { withFirebase } from '../../components/Firebase';
import { loadProfile } from '../../actions'

export class App extends Component {
  constructor() {
    super()
    this.state = {
      login: true,
      navOpen: true,
    }
  }

  componentDidMount(){
    if(!this.state.login){
      this.props.history.push('/login')
    }
    if(!this.props.currentPage) {
      this.props.history.push('/')
    }
  }

  handleNavBar = () => {
    this.setState ({navOpen: !this.state.navOpen})
  }

  render() {
    let navBar;
    const { navOpen } = this.state;
    const { match } = this.props;
    // if( navOpen) {
    //   navBar = <NavBar history={this.props.history}/>
    // } else {
    //   navBar = null;
    // }

    return (
      <div className='main'>
        <header>
          <h1 className='main-title'><span><img src={ truck } className='truck-icon'/></span>TruckTrackr<span><img src={ barrel } className='barrel-icon'/></span></h1>
          <img className='hamburger-icon' onClick={ this.handleNavBar} src={ hamburger }/>
        </header>
        <div className='content-holder'>
        { this.state.navOpen &&
          <NavBar history={this.props.history}/>
        }
        { !this.state.navOpen &&
          <div id="wrapper">
            <span id="openbtn"  onClick={this.handleNavBar}>X</span>
          </div>
        }
        <Route
          exact path='/login'
          render={ props => (
            <SignUpPage history={this.props.history}/>
          )
           }
        />
        <Route 
          exact path='/'
          component={ ProfilePage }
        />
        <Route 
          exact path='/breweries'
          render={ props => (
            <BusinessContainer 
              data={this.props.breweries} 
              changeCurrentPage={this.props.changeCurrentPage} 
              currentPage={this.props.currentPage.page}
              loadProfile={this.props.loadProfile}
              history={this.props.history}/>
          )}
        />
        <Route 
          exact path='/food_trucks'
          render={ props => (
            <BusinessContainer 
              data={this.props.foodTrucks} 
              changeCurrentPage={this.props.changeCurrentPage} 
              currentPage={this.props.currentPage.page}
              loadProfile={this.props.loadProfile}
              history={this.props.history}/>
          )}
        />
        <Route path='/business/:businessName' render={({ match }) => {
          const { businessName } = match.params;
          const brewery = this.props.breweries.find(brewery => (
            brewery.attributes.name === (businessName)))
          return (
            <ProfilePage {...brewery} />
          )}} />
        </div>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  breweries: state.breweries,
  foodTrucks: state.foodTrucks,
  currentPage: state.currentPage
});

export const mapDispatchToProps = (dispatch) => ({
  loadProfile: (profile) => dispatch(loadProfile(profile))
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(withFirebase(App)));