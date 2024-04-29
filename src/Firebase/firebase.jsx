import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDRRmnU40FZEWgPSwtsrq9dt1h1RYzClk4",
    authDomain: "social-media-project-8fb5f.firebaseapp.com",
    projectId: "social-media-project-8fb5f",
    storageBucket: "social-media-project-8fb5f.appspot.com",
    messagingSenderId: "405845837846",
    appId: "1:405845837846:web:b27b1b6424ec4392d68d37",
    measurementId: "G-S63GQDX035"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();