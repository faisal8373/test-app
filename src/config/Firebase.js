// import firebase from "firebase";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyAuSFb8echcuVVFIkN_oJXo6KpZ1PO2FgU",
  authDomain: "test-app-57722.firebaseapp.com",
  projectId: "test-app-57722",
  storageBucket: "test-app-57722.appspot.com",
  messagingSenderId: "729812302109",
  appId: "1:729812302109:web:68290e84ec22740e0c89f4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const db = firebase.firestore();