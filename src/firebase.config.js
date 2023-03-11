import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBhEOimRMn04oHo0En03qATGU-Q56snMH4",
  authDomain: "my-house-market-app.firebaseapp.com",
  projectId: "my-house-market-app",
  storageBucket: "my-house-market-app.appspot.com",
  messagingSenderId: "954302380371",
  appId: "1:954302380371:web:8cfb423795557c3bee09a6",
};

initializeApp(firebaseConfig);
export const db = getFirestore();
