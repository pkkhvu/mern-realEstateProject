// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-real-estate-2ff05.firebaseapp.com",
  projectId: "mern-real-estate-2ff05",
  storageBucket: "mern-real-estate-2ff05.appspot.com",
  messagingSenderId: "757425352943",
  appId: "1:757425352943:web:6aba41f2284ff5a0d0eb1a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
