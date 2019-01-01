import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import { changeCurrentPage } from '../../actions';

export const BusinessContainer = (props) => {
  const {data, changeCurrentPage} = props

  const businesses = data.map(business => 
    <NavLink 
      to={`/business/${business.attributes.name}`} 
      key={business.id} 
      onClick={()=> changeCurrentPage(business.attributes.name)}
    >
      {business.attributes.name}
    </NavLink>
  )

  return (
    <div>
      { businesses }
    </div>   
  )
  
};


export default (BusinessContainer);