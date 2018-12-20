import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './NavBar.css'

export class NavBar extends Component {
    constructor() {
        super()
        this.state = {

        }
    }


    render(){
    return (
        <nav>
            <ul className='nav-controls'>
                <li className='nav-control my-profile'>My Profile</li>
                <li className='nav-control browse'>Browse</li>
                <li className='nav-control breweries'>Breweries</li>
                <li className='nav-control food-trucks'>Food Trucks</li>
                <input className='search-input' placeholder='Search'/>
                <li className='nav-control cancellations'>Cancellations</li>
            </ul>
        </nav>
    )
    }
}

export default NavBar