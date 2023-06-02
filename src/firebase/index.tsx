// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqlhGvLG1Xu5PgYiGrgkY9CYaNLOtanMo",
  authDomain: "cheers-2002d.firebaseapp.com",
  projectId: "cheers-2002d",
  storageBucket: "cheers-2002d.appspot.com",
  messagingSenderId: "112786245501",
  appId: "1:112786245501:web:81db0a4512be635e372e14",
  measurementId: "G-V61D58F8QQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);