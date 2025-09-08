// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCawoMPj-1yf6YZcsvqS7Yc0YRNq7Wq-Uk",
  authDomain: "portfolio-jay-f1507.firebaseapp.com",
  projectId: "portfolio-jay-f1507",
  storageBucket: "portfolio-jay-f1507.firebasestorage.app",
  messagingSenderId: "630316974211",
  appId: "1:630316974211:web:eb8f378e0d1768e0ec1bb6",
  measurementId: "G-PLR5D3RKHT"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);