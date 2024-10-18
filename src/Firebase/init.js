// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCkJui0HG0dO5I0TBFnPmmNu6DTqjCvqSM",
    authDomain: "week7-maner.firebaseapp.com",
    projectId: "week7-maner",
    storageBucket: "week7-maner.appspot.com",
    messagingSenderId: "319851836463",
    appId: "1:319851836463:web:1bf83f887568212b4202da"
  };
  
  // Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore()
export default db
  