// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBoQfgOnqS78hoIg2qGTWThnpq7IYA_FMg",
  authDomain: "herwaree-6ed5d.firebaseapp.com",
  projectId: "herwaree-6ed5d",
  storageBucket: "herwaree-6ed5d.appspot.com",
  messagingSenderId: "808003214498",
  appId: "1:808003214498:web:f482899c2ce94818a38bfb",
  measurementId: "G-C7073CHT5K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
