// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWiDYP1JSvMvOMa6q5ovuERsWNcncFBUw",
  authDomain: "webinar-9eeee.firebaseapp.com",
  projectId: "webinar-9eeee",
  storageBucket: "webinar-9eeee.appspot.com",
  messagingSenderId: "603138764089",
  appId: "1:603138764089:web:467ea373044ce68fa94ce8",
  measurementId: "G-BC8LSCH10G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);