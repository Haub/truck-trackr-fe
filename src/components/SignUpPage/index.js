import React, { Component } from 'react';
import { FirebaseContext, withFirebase } from '../Firebase';
import { Login } from '../../containers/Login'
import { withRouter } from 'react-router-dom'


export const SignUpPage = (props) => (
  <div>
    <FirebaseContext.Consumer>
      {firebase => <Login firebase={firebase} history={props.history}/>}
    </FirebaseContext.Consumer>
  </div>
);

export default withRouter(withFirebase(SignUpPage))