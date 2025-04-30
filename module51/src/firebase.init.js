// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAy7DVnbkqqtwvWWyuq-XPwtaSeLSe8o54",
  authDomain: "module51-ce962.firebaseapp.com",
  projectId: "module51-ce962",
  storageBucket: "module51-ce962.firebasestorage.app",
  messagingSenderId: "100237393749",
  appId: "1:100237393749:web:9340166df34c1c7d9579dc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
