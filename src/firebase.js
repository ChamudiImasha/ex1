// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAt6sispDNKsEPjBk5K37gyv9nb_5TDvoQ",
  authDomain: "chamudiex1.firebaseapp.com",
  projectId: "chamudiex1",
  storageBucket: "chamudiex1.firebasestorage.app",
  messagingSenderId: "421720355134",
  appId: "1:421720355134:web:b9ccd59c364507d0933c6f",
  measurementId: "G-24KNP5578D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);