import app from 'firebase/app';
import 'firebase/auth';
import { config } from '../../utilities/config.js';

// let config = {
//   apiKey: process.env.apiKey,
//   authDomain: process.env.authDomain,
//   databaseURL: process.env.databaseURL,
//   messagingSenderId: process.env.messagingSenderId,
//   projectId: process.env.projectId,
//   storageBucket: process.env.storageBucket
// }

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