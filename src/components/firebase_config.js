// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdoGj6QNokEt6cSkBewaMTla5B9THf6uk",
  authDomain: "coding-contest-ide.firebaseapp.com",
  projectId: "coding-contest-ide",
  storageBucket: "coding-contest-ide.appspot.com",
  messagingSenderId: "1093247901403",
  appId: "1:1093247901403:web:a751736b92c1b7c29876fe",
  measurementId: "G-R83B1BN231"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db=getFirestore(app)