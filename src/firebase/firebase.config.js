// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVrrncqVqjfu418qvvVem4dpHeELwnBOo",
  authDomain: "dragon-news-portal-f1d3a.firebaseapp.com",
  projectId: "dragon-news-portal-f1d3a",
  storageBucket: "dragon-news-portal-f1d3a.appspot.com",
  messagingSenderId: "97285411557",
  appId: "1:97285411557:web:cdc7a6e9f16ca642253a0c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;