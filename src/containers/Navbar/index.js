import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { loadFoodTrucks, loadBreweries } from '../../actions';
import { mockFoodTrucks, mockBreweries } from '../../tests/testMocks';

import './NavBar.css'

export class NavBar extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    // loadData = async (event) => {
    //     const businessType = event.target.getAttribute('name')
    //     this.props.history.push(`/${businessType}`);

    //     try {
    //         const response = await fetch(`https://truck-trackr-api.herokuapp.com/api/v1/${businessType}`);
    //         const result = await response.json();
    //         console.log(result)
    //     } catch(error) {
    //         throw new Error()
    //     }
    // }

    loadMockData = (event) => {
        const businessType = event.target.getAttribute('name')

        if(businessType === 'breweries') {
            this.props.loadBreweries(mockBreweries)
        } else if(businessType === 'food_trucks') {
            this.props.loadFoodTrucks(mockFoodTrucks)
        }
        this.props.history.push(`/${businessType}`);
    }

    render(){
        return (
            <nav>
                <ul className='nav-controls'>
                    <li className='nav-control my-profile'>My Profile</li>
                    <li onClick={this.loadMockData} name='breweries' className='nav-control breweries'>Breweries</li>
                    <li onClick={this.loadMockData} name='food_trucks' className='nav-control food-trucks'>Food Trucks</li>
                    <input className='search-input' placeholder='Search'/>
                </ul>
            </nav>
        )
    }
}

export const mapDispatchToProps = (dispatch) => ({
    loadBreweries: (breweries) => dispatch(loadBreweries(breweries)),
    loadFoodTrucks: (foodTrucks) => dispatch(loadFoodTrucks(foodTrucks)) 
});

export default withRouter(connect(null, mapDispatchToProps))(NavBar);