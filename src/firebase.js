import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "react-firebase-tutorial-ae5a9.firebaseapp.com",
  projectId: "react-firebase-tutorial-ae5a9",
  storageBucket: "react-firebase-tutorial-ae5a9.appspot.com",
  messagingSenderId: "146626331463",
  appId: "1:146626331463:web:e0939e0f0e0189a205c262"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);