// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD-alinpHm5FO3Pab6fcI6tDLPhhhD8CDA",
    authDomain: "portfolio-6088f.firebaseapp.com",
    projectId: "portfolio-6088f",
    storageBucket: "portfolio-6088f.firebasestorage.app",
    messagingSenderId: "630762030222",
     appId: "1:630762030222:web:5e03a5262bb8570340b5df",
    measurementId: "G-FVFF6FWJRZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);