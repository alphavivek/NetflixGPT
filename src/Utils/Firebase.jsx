// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAaHC6qyjz73LxZh8JEhSCio8zrBRXejQ",
  authDomain: "netflixgpt-vivek.firebaseapp.com",
  projectId: "netflixgpt-vivek",
  storageBucket: "netflixgpt-vivek.firebasestorage.app",
  messagingSenderId: "879773015312",
  appId: "1:879773015312:web:3b2e877e708d6b222a1995",
  measurementId: "G-6KHBWEH3J1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();