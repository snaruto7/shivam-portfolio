// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDR-G9XgRcODjf35UMyCoJx7Z71OgRKay8",
  authDomain: "shivam-portfolio-21.firebaseapp.com",
  projectId: "shivam-portfolio-21",
  storageBucket: "shivam-portfolio-21.appspot.com",
  messagingSenderId: "1042276771958",
  appId: "1:1042276771958:web:8ce369a95dea3f462e5757",
  measurementId: "G-TGW0Y5EBDZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default analytics;