// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJX4bm25Yz4_bS99u0fKcCDh-BDT0kmEY",
  authDomain: "netflixgpt-18ae1.firebaseapp.com",
  projectId: "netflixgpt-18ae1",
  storageBucket: "netflixgpt-18ae1.appspot.com",
  messagingSenderId: "248989063453",
  appId: "1:248989063453:web:76e04b9e7539105ede69f4",
  measurementId: "G-YR9GW75QQ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();