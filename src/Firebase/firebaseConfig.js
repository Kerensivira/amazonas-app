// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, FacebookAuthProvider  } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvNJbVEX1qqIF4MlFjO1KIBPFkS7a0_vQ",
  authDomain: "as2022.firebaseapp.com",
  projectId: "as2022",
  storageBucket: "as2022.appspot.com",
  messagingSenderId: "364195522020",
  appId: "1:364195522020:web:9f9f93043a4778646693f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider();
const facebook = new FacebookAuthProvider();
const dataBase = getFirestore();

export { app, google, facebook, dataBase }
