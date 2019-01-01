import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';


export const BusinessContainer = (props) => {
  const {data} = props

  const businesses = data.map(business => <NavLink to={`/business/${business.attributes.name}`} key={business.id} >{business.attributes.name}</NavLink>)

  return (
    <div>
      { businesses }
    </div>   
  )
  
};


export default (BusinessContainer);