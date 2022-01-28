// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-analytics.js";
import * as firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcBf99_fjePzRNjQYHFJJnQzODnmJ8EkM",
  authDomain: "mykart-fa8ae.firebaseapp.com",
  projectId: "mykart-fa8ae",
  storageBucket: "mykart-fa8ae.appspot.com",
  messagingSenderId: "627170155748",
  appId: "1:627170155748:web:d54cddabed8bebb64a20f1",
  measurementId: "G-C9G02DVL2B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.googleAuthProvider;