import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyCl2xALVRpPRtXauXDAn63EHFbFyRk7V3o",
    authDomain: "foodstorehackathon.firebaseapp.com",
    projectId: "foodstorehackathon",
    storageBucket: "foodstorehackathon.appspot.com",
    messagingSenderId: "161193196975",
    appId: "1:161193196975:web:52f9aa36a1cb7f1ed3435a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const db = firebase.firestore();