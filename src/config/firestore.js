// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const firabaseApiKey=import.meta.env.VITE_FIREBASE_API_KEY;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: firabaseApiKey,
  authDomain: "eshop-c47d7.firebaseapp.com",
  projectId: "eshop-c47d7",
  storageBucket: "eshop-c47d7.firebasestorage.app",
  messagingSenderId: "413369591646",
  appId: "1:413369591646:web:89d9eda4fa1382948991cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);