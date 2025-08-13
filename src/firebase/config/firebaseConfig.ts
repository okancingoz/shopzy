// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeXsjozNMaYqSzjmhII14N-_w6Twp9IpI",
  authDomain: "shopzy-b24a0.firebaseapp.com",
  projectId: "shopzy-b24a0",
  storageBucket: "shopzy-b24a0.firebasestorage.app",
  messagingSenderId: "368254662680",
  appId: "1:368254662680:web:7ab9580cf04da33ff0eb6d",
  measurementId: "G-MF286Y3JR5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
