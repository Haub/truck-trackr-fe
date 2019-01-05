import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./ProfilePage.css";
import SignUpPage from "../../components/SignUpPage";
import { addUser } from "../../actions";
import { createEventFetch } from "../../utilities";

export class ProfilePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      createEventOpen: false,
      eventName: "",
      eventDate: ""
    };
  }

  componentDidMount() {
    // if(!Object.keys(this.props.currentPage).length){
    //     this.props.history.push('/')
    // }
  }

  makeEvent = () => {
    let newState = !this.state.createEventOpen;
    this.setState({ createEventOpen: newState });
  };

  handleKeyPress = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    let cleanUser = this.cleanDataForRequest();
    let cleanPostParams = this.createPostBody();
    let result = await createEventFetch(cleanUser, cleanPostParams);
    console.log(result);
    this.setState({
      createEventOpen: false,
      eventName: "",
      eventDate: ""
    });
  };

  cleanDataForRequest = () => {
    const { user } = this.props;
    let type;
    let eventType;
    if (user.type === "food_truck") {
      type = "food_trucks";
      eventType = "open_dates";
    } else {
      type = "breweries";
      eventType = "brewery_events";
    }

    let cleanUser = {
      type,
      id: user.id,
      eventType
    };
    return cleanUser;
  };

  createPostBody = () => {
    const uid = sessionStorage.getItem("uid");
    const { eventDate } = this.state;

    return {
      uid,
      date: eventDate
    };
  };

  render() {
    const { currentPage, user, userEvents } = this.props;
    let events;

    if(userEvents.length && currentPage.data === user) {
      events = userEvents.map(event => (
          <h4 className='upcoming-events-date'>{event.attributes.date.slice(5)}
            <span className='upcoming-events-status'></span>
          </h4>
        ))
    } else if (userEvents.length && currentPage.data !== user) {
      events = currentPage.included.map(event => (
          <h4 className='upcoming-events-date'>{event.attributes.date.slice(5)}
            <span className='upcoming-events-status'></span>
          </h4>
      ))  
    }

    if (Object.keys(currentPage).length) {
      const { attributes } = currentPage.data;
      return (
        <div className="parent-container">
          <div className="profile-container">
            <div className="biz-container">
              <h2 className="biz-name">{attributes.name}</h2>
              <h5
                className={
                  currentPage.data.type === "food_truck" ? "biz-title" : "hidden"
                }
              >
                Food Type:
              </h5>
              <h5
                className={
                  currentPage.data.type === "food_truck" ? "biz-info" : "hidden"
                }
              >
                {attributes.food_type || null}
              </h5>

              <h5 className="biz-title">Phone Number:</h5>
              <h5 className="biz-info">{attributes.phone}</h5>

              <h5 className="biz-title">Contact Name:</h5>
              <h5 className="biz-info">{attributes.contact_name}</h5>

              <h5 className="biz-title">Email:</h5>
              <h5 className="biz-info">{attributes.email}</h5>

              <h5 className="biz-title">Website:</h5>
              <a href={attributes.website} target="blank" className="biz-info">
                {attributes.website}
              </a>
            </div>
            <button
              onClick={this.makeEvent}
              className={
                currentPage.data === user ? "create-event-button" : "hidden"
              }
            >
              Create Event
            </button>
            <div className="upcoming-events-container">
              <h3 className="upcoming-events-title">UPCOMING EVENTS</h3>
              {events}
            </div>
            <form
              className={
                this.state.createEventOpen ? "create-event-form" : "hidden"
              }
            >
              <input
                className="create-event-input"
                name="eventName"
                value={this.state.eventName}
                placeholder="Event Name"
                onChange={this.handleKeyPress}
              />
              <input
                className="create-event-input"
                name="eventDate"
                value={this.state.eventDate}
                placeholder="Event Date (numerical)"
                onChange={this.handleKeyPress}
              />
              <button
                onClick={this.handleSubmit}
                className="create-event-form-button"
              >
                Create
              </button>
            </form>
          </div>
        </div>
      );
    } else {
      return <div />;
    }
  }
}

export const mapStateToProps = state => ({
  currentPage: state.currentPage,
  user: state.user, 
  userEvents: state.userEvents
});

export const mapDispatchToProps = dispatch => ({
  addUser: user => dispatch(addUser(user))
});

const { object, func } = PropTypes;

ProfilePage.propTypes = {
  user: object,
  currentPage: object,
  addUser: func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilePage);
