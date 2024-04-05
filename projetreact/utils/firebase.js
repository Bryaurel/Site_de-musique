// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbzs68VelcEJQAasuroNzh7xnIrOf6xNc",
  authDomain: "muziknet-8e233.firebaseapp.com",
  projectId: "muziknet-8e233",
  storageBucket: "muziknet-8e233.appspot.com",
  messagingSenderId: "703919132161",
  appId: "1:703919132161:web:4ffb85ecc4705c0213fa00",
  measurementId: "G-T8YT1BWNV3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);