// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDI0bdYJwP_fT8R0UFpDxD-9FDQtGp48sg",
  authDomain: "practice-firebase-fe86a.firebaseapp.com",
  projectId: "practice-firebase-fe86a",
  storageBucket: "practice-firebase-fe86a.firebasestorage.app",
  messagingSenderId: "951755527039",
  appId: "1:951755527039:web:0345c0c3577a623d99804a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
