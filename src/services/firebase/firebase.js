// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlJKDsB5OieM3B0ebF8cpKN53cPKkfbbg",
  authDomain: "app01-1e325.firebaseapp.com",
  projectId: "app01-1e325",
  storageBucket: "app01-1e325.appspot.com",
  messagingSenderId: "29158058117",
  appId: "1:29158058117:web:5f1e6e52f79b5c53abe1ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app)