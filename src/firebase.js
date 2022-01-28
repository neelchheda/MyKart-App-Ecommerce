
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

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