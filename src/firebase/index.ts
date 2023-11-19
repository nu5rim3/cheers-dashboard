// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCqlhGvLG1Xu5PgYiGrgkY9CYaNLOtanMo",
  authDomain: "cheers-2002d.firebaseapp.com",
  projectId: "cheers-2002d",
  storageBucket: "cheers-2002d.appspot.com",
  messagingSenderId: "112786245501",
  appId: "1:112786245501:web:81db0a4512be635e372e14",
  measurementId: "G-V61D58F8QQ",
  databaseURL: "https://cheers-2002d-default-rtdb.asia-southeast1.firebasedatabase.app"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
export const database = getDatabase(app);