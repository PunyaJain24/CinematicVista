// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDh_9nnYx-7QHfMAyAntfGy6N7_j-0uD8",
  authDomain: "cinematicvista-cafe1.firebaseapp.com",
  projectId: "cinematicvista-cafe1",
  storageBucket: "cinematicvista-cafe1.appspot.com",
  messagingSenderId: "817708555020",
  appId: "1:817708555020:web:f135c1db129c66a27fc729",
  measurementId: "G-SHMG11YLGD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log("Firebase config:", firebaseConfig);

export const auth = getAuth();