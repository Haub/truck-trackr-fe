import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './NavBar.css'

export class NavBar extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    loadData = (event) => {
        this.props.history.push(`/${event.target.getAttribute('name')}`);

    }

    render(){
    return (
        <nav>
            <ul className='nav-controls'>
                <li className='nav-control my-profile'>My Profile</li>
                <li onClick={this.loadData} name='breweries' className='nav-control breweries'>Breweries</li>
                <li onClick={this.loadData} name='food-trucks' className='nav-control food-trucks'>Food Trucks</li>
                <input className='search-input' placeholder='Search'/>
            </ul>
        </nav>
    )
    }
}

export const mapDispatchToProps = (dispatch) => ({

})

export default withRouter(NavBar);