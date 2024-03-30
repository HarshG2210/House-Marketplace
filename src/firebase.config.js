// Import the functions you need from the SDKs you need

import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBBZ8hQCh5oumZQ_eAdm5TzmLmz1TKW1XI",
  authDomain: "house-marketplace-app-a5c8e.firebaseapp.com",
  projectId: "house-marketplace-app-a5c8e",
  storageBucket: "house-marketplace-app-a5c8e.appspot.com",
  messagingSenderId: "545464470764",
  appId: "1:545464470764:web:a6c08212f81f76ac7669c9",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
export const db = getFirestore();
