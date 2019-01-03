import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { loadFoodTrucks, loadBreweries, loadProfile } from '../../actions';
import { mockFoodTrucks, mockBreweries } from '../../tests/testMocks';
import * as helper from '../../utilities'
import './NavBar.css'

export class NavBar extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    loadData = async (event) => {
        const businessType = event.target.getAttribute('name')

       const result = helper.fetchBusinesses(businessType)
        if(businessType === 'breweries'){
            this.props.loadProfile({page: 'breweries'})
            this.props.loadBreweries(result.data)
        } else {
            this.props.loadProfile({page: 'food_trucks'})
            this.props.loadFoodTrucks(result.data)
        }
    }

    loadMockData = (event) => {
        const businessType = event.target.getAttribute('name')

        if(businessType === 'breweries') {
            this.props.loadBreweries(mockBreweries)
        } else if(businessType === 'food_trucks') {
            this.props.loadFoodTrucks(mockFoodTrucks)
        }
    }

    render(){
        return (
            <nav className={this.props.displayStatus ? 'display' : 'hidden-nav'}>
                <ul className='nav-controls'>
                    <li className='nav-control my-profile' className={this.props.displayStatus ? 'nav-control my-profile' : 'hidden'}>My Profile</li>
                    <NavLink to='/breweries' onClick={(e) => this.loadData(e)} name='breweries' className={this.props.displayStatus ? 'nav-control breweries' : 'hidden'}>Breweries</NavLink>
                    <NavLink to='/food_trucks' onClick={(e) => this.loadData(e)} name='food_trucks' className={this.props.displayStatus ? 'nav-control food-trucks' : 'hidden'}>Food Trucks</NavLink>
                    <input className={this.props.displayStatus ? 'nav-control search-input' : 'hidden'} placeholder='Search'/>
                </ul>
            </nav>
        )
    }
}

export const mapDispatchToProps = (dispatch) => ({
    loadBreweries: (breweries) => dispatch(loadBreweries(breweries)),
    loadFoodTrucks: (foodTrucks) => dispatch(loadFoodTrucks(foodTrucks)) ,
    loadProfile: (profile) => dispatch(loadProfile(profile))
});

export default connect(null, mapDispatchToProps)(NavBar);