import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import { changeCurrentPage } from "../../actions";
import "./BusinessContainer.css";
import { withRouter } from "react-router-dom";

export const BusinessContainer = props => {
  const { data, changeCurrentPage, currentPage, loadProfile } = props;

  const handleClick = async e => {
    try {
      const response = await fetch(
        `https://truck-trackr-api.herokuapp.com/api/v1/${currentPage}/${
          e.target.id
        }`
      );
      const result = await response.json();
      await loadProfile(result.data);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const businesses = data.map(business => {
    return (
      <NavLink
        to={`/business/${business.attributes.name}`}
        key={business.id}
        id={business.id}
        onClick={handleClick}
      >
        {business.attributes.name}
      </NavLink>
    );
  });

  const header = currentPage.replace("_", " ");

  return (
    <div className="business-holder">
      <h3>{`${header}`}</h3>
      {businesses}
    </div>
  );
};

export default withRouter(BusinessContainer);
