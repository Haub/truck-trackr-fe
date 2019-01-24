import app from "firebase/app";
import "firebase/auth";
// import { config } from "../../utilities/config.js";


let config = {
  apiKey: "AIzaSyAZaFvQvt60q0xHZ0LFxug4ooVX3LOiPMA",
  authDomain: "trucktrackr-2f98a.firebaseapp.com",
  databaseURL: "https://trucktrackr-2f98a.firebaseio.com",
  projectId: "trucktrackr-2f98a",
  storageBucket: "trucktrackr-2f98a.appspot.com",
  messagingSenderId: "97220175359"
};

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
