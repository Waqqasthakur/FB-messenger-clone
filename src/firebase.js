import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBHz-fR22N_KNKZJisEwJ40GipYtxWmmRc",
    authDomain: "facebook-messenger-clone-a2cad.firebaseapp.com",
    projectId: "facebook-messenger-clone-a2cad",
    storageBucket: "facebook-messenger-clone-a2cad.appspot.com",
    messagingSenderId: "505003420938",
    appId: "1:505003420938:web:b39f1980d9e57e91731ef3",
    measurementId: "G-VN5XXNWK4L"
  });

const db = firebaseApp.firestore();

export default db;