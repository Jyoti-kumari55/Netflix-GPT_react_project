// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBJuQ-ehDLennWBxjxJwAP_2C3qJy2xI6w",
  authDomain: "netflix-gpt-acb9c.firebaseapp.com",
  projectId: "netflix-gpt-acb9c",
  storageBucket: "netflix-gpt-acb9c.appspot.com",
  messagingSenderId: "778082760747",
  appId: "1:778082760747:web:4e12bbfe603e665796d26e",
  measurementId: "G-RHBV2455RH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();