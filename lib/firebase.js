import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD-alinpHm5FO3Pab6fcI6tDLPhhhD8CDA",
    authDomain: "portfolio-6088f.firebaseapp.com",
    projectId: "portfolio-6088f",
    storageBucket: "portfolio-6088f.firebasestorage.app",
    messagingSenderId: "630762030222",
    appId: "1:630762030222:web:5e03a5262bb8570340b5df",
    measurementId: "G-FVFF6FWJRZ"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);