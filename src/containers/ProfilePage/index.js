import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./ProfilePage.css";
import SignUpPage from "../../components/SignUpPage";
import { addUser, editEvent, removeEvent } from "../../actions";
import { createEventFetch } from "../../utilities";
import * as helper from "../../utilities";

export class ProfilePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      createEventOpen: false,
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

  toggleEventStatus = async e => {
    let eventToChange = this.props.userEvents.find(
      userEvent => userEvent.id === e.target.id
    );
    console.log(eventToChange);
    if (this.props.user.type === "brewery") {
      eventToChange.attributes["truck_booked?"] = !eventToChange.attributes[
        "truck_booked?"
      ];
      await helper.toggleEventStatus(this.props.currentPage, eventToChange);
      this.props.editEvent(eventToChange);
    } else {
      eventToChange.attributes["booked?"] = !eventToChange.attributes[
        "booked?"
      ];
      await helper.toggleEventStatus(this.props.currentPage, eventToChange);
      this.props.editEvent(eventToChange);
    }
  };

  deleteEvent = async e => {
    let eventToDelete = this.props.userEvents.find(
      userEvent => userEvent.id === e.target.classList[0]
    );
    await helper.deleteEventFetch(this.props.currentPage, eventToDelete);
    this.props.removeEvent(eventToDelete);
  };

  render() {
    const { currentPage, user, userEvents } = this.props;
    let events;

    if (userEvents.length && currentPage.data === user) {
      if (user.type === "brewery") {
        events = userEvents.map(event => (
          <h4
            className={
              event.attributes["truck_booked?"]
                ? "upcoming-events-date booked"
                : "upcoming-events-date open"
            }
            key={event.attributes.date}
          >
            {event.attributes.date.slice(5)}
            <span className="upcoming-events-status">
              {event.attributes["truck_booked?"] ? "Booked" : "Open"}
            </span>
            <button id={event.attributes.id} onClick={this.toggleEventStatus}>
              Change Status
            </button>
            <button className={event.attributes.id} onClick={this.deleteEvent}>
              Delete Event
            </button>
          </h4>
        ));
      } else {
        events = userEvents.map(event => (
          <h4
            className={
              event.attributes["booked?"]
                ? "upcoming-events-date booked"
                : "upcoming-events-date open"
            }
            key={event.attributes.id}
          >
            {event.attributes.date.slice(5)}
            <span className="upcoming-events-status">
              {event.attributes["booked?"] ? "Booked" : "Open"}
            </span>
            <button id={event.attributes.id} onClick={this.toggleEventStatus}>
              Change Status
            </button>
            <button className={event.attributes.id} onClick={this.deleteEvent}>
              Delete Event
            </button>
          </h4>
        ));
      }
    } else if (userEvents.length && currentPage.data !== user) {
      if (user.type === "brewery") {
        events = currentPage.included.map(event => (
          <h4
            className={
              event.attributes["truck_booked?"]
                ? "upcoming-events-date booked"
                : "upcoming-events-date open"
            }
            key={event.attributes.id}
          >
            {event.attributes.date.slice(5)}
            <span className="upcoming-events-status">
              {event.attributes["truck_booked?"] ? "Booked" : "Open"}
            </span>
          </h4>
        ));
      } else {
        events = currentPage.included.map(event => (
          <h4
            className={
              event.attributes["booked?"]
                ? "upcoming-events-date booked"
                : "upcoming-events-date open"
            }
            key={event.attributes.id}
          >
            {event.attributes.date.slice(5)}
            <span className="upcoming-events-status">
              {event.attributes["booked?"] ? "Booked" : "Open"}
            </span>
          </h4>
        ));
      }
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
                  currentPage.data.type === "food_truck"
                    ? "biz-title"
                    : "hidden"
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
  addUser: user => dispatch(addUser(user)),
  editEvent: userEvent => dispatch(editEvent(userEvent)),
  removeEvent: userEvent => dispatch(removeEvent(userEvent))
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
