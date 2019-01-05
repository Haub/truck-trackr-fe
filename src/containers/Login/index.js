import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./Login.css";
import { addUser, loadProfile, loadEvents } from "../../actions";
import * as helper from "../../utilities";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      passwordOne: "",
      signUp: false,
      locationType: "",
      businessName: "",
      address: "",
      phoneNumber: "",
      contactName: "",
      foodType: "",
      logo: null
    };
  }

  handleKeyPress = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = async e => {
    // e.preventDefault();
    const { email, passwordOne, signUp, locationType } = this.state;


    if (signUp) {
      this.props.firebase
        .doCreateUserWithEmailAndPassword(email, passwordOne)
        .then(async authUser => {
          let user = this.cleanUserForSignUp(authUser);
          sessionStorage.setItem("uid", authUser.user.uid);
          let result = await helper.createNewUser(user, locationType);
          this.props.addUser(result[0].data);
          this.props.loadProfile(result[0]);
          this.props.loadEvents(result[1].included)
          this.props.history.push("/profile");
        })
        .catch(error => {
          this.setState({ error });
        });
    } else {
      this.props.firebase
        .doSignInWithEmailAndPassword(email, passwordOne)
        .then(async authUser => {
          sessionStorage.setItem("uid", authUser.user.uid);
          const user = this.cleanUserForLogin(authUser, locationType);
          const result = await helper.loginUser(user);
          console.log(result);
          this.props.addUser(result[0].data);
          this.props.loadProfile(result[0]);
          this.props.loadEvents(result[1].included)
          this.props.history.push("/profile");
        })
        .catch(error => {
          this.setState({ error });
        });
    }
  };

  cleanUserForSignUp = authUser => {
    const {
      username,
      email,
      passwordOne,
      signUp,
      locationType,
      businessName,
      address,
      phoneNumber,
      contactName,
      foodType
    } = this.state;
    let user;
    if (locationType === "food_trucks") {
      user = {
        name: businessName,
        food_type: foodType,
        contact_name: contactName,
        phone: phoneNumber,
        email,
        website: username,
        uid: authUser.user.uid
      };
    } else {
      user = {
        name: businessName,
        address: address,
        contact_name: contactName,
        phone: phoneNumber,
        email,
        uid: authUser.user.uid
      };
    }
    return user;
  };

  cleanUserForLogin = (authUser, locationType) => {
    let user;
    if (locationType === "food_trucks") {
      user = {
        uid: authUser.user.uid,
        account_type: "food_truck"
      };
    } else {
      user = {
        uid: authUser.user.uid,
        account_type: "brewery"
      };
    }
    return user;
  };

  toggleSignUp = () => {
    let newSignUp = !this.state.signUp;
    this.setState({ signUp: newSignUp });
  };

  fileChangedHandler = event => {
    this.setState({
      logo: event.target.files[0]
    });
  };

  uploadHandler = () => {
    console.log(this.state.logo);

    // const formData = new FormData()
    // formData.append('myFile', this.state.logo, this.state.logo.name)
    // axios.post('my-domain.com/file-upload', formData)
  };

  render() {
    const { signUp, locationType } = this.state;
    let showFoodType;

    if (signUp && locationType === "food_trucks") {
      showFoodType = true;
    }

    return (
      <main className="login">
        <form className="login-form" onSubmit={this.handleSubmit}>
          <input
            className="email-input"
            name="email"
            type="email"
            placeholder="Email"
            onChange={this.handleKeyPress}
          />
          <input
            className="password-input"
            name="passwordOne"
            type="password"
            placeholder="Password"
            onChange={this.handleKeyPress}
          />
          <input
            className={signUp ? "business-name-input" : "hidden"}
            name="businessName"
            placeholder="Business Name"
            onChange={this.handleKeyPress}
          />
          <input
            className={signUp ? "address-input" : "hidden"}
            name="address"
            placeholder="Address/City Located"
            onChange={this.handleKeyPress}
          />
          <input
            className={signUp ? "phone-number-input" : "hidden"}
            name="phoneNumber"
            placeholder="Phone Number"
            onChange={this.handleKeyPress}
          />
          <input
            className={signUp ? "contact-name-input" : "hidden"}
            name="contactName"
            placeholder="Contact Name"
            onChange={this.handleKeyPress}
          />
          <input
            className={showFoodType ? "food-type-input" : "hidden"}
            name="foodType"
            placeholder="Food Type"
            onChange={this.handleKeyPress}
          />
          <p className={signUp ? "business-type" : "hidden"}>
            What Type of Business:
          </p>
          <div className="button-holder">
            <input
              className={"food-truck-radio"}
              type="radio"
              name="locationType"
              value="food_trucks"
              id="food-truck-button"
              onChange={this.handleKeyPress}
            />
            <label className={"food-truck-label"} htmlFor="food-truck-button">
              Food Truck
            </label>
            <input
              className={"brewery-radio"}
              type="radio"
              name="locationType"
              value="breweries"
              id="brewery-button"
              onChange={this.handleKeyPress}
            />
            <label className={"brewery-label"} htmlFor="brewery-button">
              Brewery
            </label>
          </div>
          {/* <input
            className={signUp ? "logo-input" : "hidden"}
            name="logo"
            placeholder="Upload logo"
            onChange={this.handleKeyPress}
            type="file"
          />
          <button
            className={signUp ? "logo-button" : "hidden"}
            onClick={this.uploadHandler}
          >
            Upload!
          </button> */}
          <NavLink
            to="/profile"
            className="signin-button"
            onClick={e => this.handleSubmit(e)}
          >
            {signUp ? "Sign Up" : "Sign In"}
          </NavLink>
        </form>
        <button className="signup-button" onClick={this.toggleSignUp}>
          {signUp
            ? "Actually I already have an account"
            : "First Time Here? Sign Up!"}
        </button>
      </main>
    );
  }
}

export const mapStateToProps = state => ({
  user: state.user
});

export const mapDispatchToProps = dispatch => ({
  addUser: user => dispatch(addUser(user)),
  loadProfile: currentPage => dispatch(loadProfile(currentPage)),
  loadEvents: events => dispatch(loadEvents(events)) 
});

const { object, func } = PropTypes;

Login.propTypes = {
  user: object,
  addUser: func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Login));
