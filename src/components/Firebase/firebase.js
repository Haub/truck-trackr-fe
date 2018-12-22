import app from 'firebase/app';
import 'firebase/auth';
import { config } from '../../utilities/config.js';

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
  }

  doCreateUserWithEmailAndPassword = (email, password) =>
  this.auth.createUserWithEmailAndPassword(email, password);
  

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);
  
    doSignOut = () => this.auth.signOut();

}

export default Firebase;