// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-c392a.firebaseapp.com",
  projectId: "mern-auth-c392a",
  storageBucket: "mern-auth-c392a.appspot.com",
  messagingSenderId: "23434754144",
  appId: "1:23434754144:web:0d508b28a787c9f5cf2b05",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
