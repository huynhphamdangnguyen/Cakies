// Import the functions you need from the SDKs you need
import {getAuth, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoqdDOuD1gxCWgoY4scznEK0tourYdTnQ",
  authDomain: "final-project-89530.firebaseapp.com",
  databaseURL: "https://final-project-89530-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "final-project-89530",
  storageBucket: "final-project-89530.appspot.com",
  messagingSenderId: "391494064809",
  appId: "1:391494064809:web:fd00452420cdc36f5c27b8",
  measurementId: "G-35WVVJEL3H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app); // Sử dụng ứng dụng đã được khởi tạo

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
