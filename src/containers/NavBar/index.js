import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { loadFoodTrucks, loadBreweries, loadProfile } from '../../actions';
import { mockFoodTrucks, mockBreweries } from '../../tests/testMocks';

import './NavBar.css'

export class NavBar extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    loadData = async (event) => {
        const businessType = event.target.getAttribute('name')

        try {
            const response = await fetch(`https://truck-trackr-api.herokuapp.com/api/v1/${businessType}`);
            const result = await response.json();
            if(businessType === 'breweries'){
                this.props.loadProfile({page: 'breweries'})
                this.props.loadBreweries(result.data)
            } else {
                this.props.loadProfile({page: 'food_trucks'})
                this.props.loadFoodTrucks(result.data)
            }
        } catch(error) {
            throw new Error(error.message)
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
            <nav>
                <ul className='nav-controls'>
                    <li className='nav-control my-profile'>My Profile</li>
                    <NavLink to='/breweries' onClick={this.loadData} name='breweries' className='nav-control breweries'>Breweries</NavLink>
                    <NavLink to='/food_trucks' onClick={this.loadData} name='food_trucks' className='nav-control food-trucks'>Food Trucks</NavLink>
                    <input className='search-input' placeholder='Search'/>
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