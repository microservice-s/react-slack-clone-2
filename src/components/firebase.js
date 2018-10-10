import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";


var config = {
  apiKey: "AIzaSyBlmVP-KjEdHBgrKiGVBVrieKUr4fC9lmQ",
  authDomain: "react-slack-clone-26509.firebaseapp.com",
  databaseURL: "https://react-slack-clone-26509.firebaseio.com",
  projectId: "react-slack-clone-26509",
  storageBucket: "react-slack-clone-26509.appspot.com",
  messagingSenderId: "1007294518207"
};
firebase.initializeApp(config);

export default firebase;