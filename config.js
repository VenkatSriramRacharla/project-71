import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyCa5wpUnvIy4XZW1iBUaV3F_zLRtgE7lYM",
    authDomain: "e-ride-stage-ced6d.firebaseapp.com",
    projectId: "e-ride-stage-ced6d",
    storageBucket: "e-ride-stage-ced6d.appspot.com",
    messagingSenderId: "358732718256",
    appId: "1:358732718256:web:c3fb47f0c8e98c3a23db75"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
