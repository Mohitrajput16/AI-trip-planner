// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import{getFirestore} from "firebase/firestore"  
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpiwGYqtfwVyTRReSTC2JaOigmmYZpUhM",
  authDomain: "ai-travel-planner-2c90e.firebaseapp.com",
  projectId: "ai-travel-planner-2c90e",
  storageBucket: "ai-travel-planner-2c90e.firebasestorage.app",
  messagingSenderId: "109314608304",
  appId: "1:109314608304:web:cc86138c6d60b86df0ff75",
  measurementId: "G-TWVJXN4R5J"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);