// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQ49m7Xvr7bf7YbCz4nGX-I2V7qLf1n3U",
  authDomain: "cheers-app-2bfa6.firebaseapp.com",
  projectId: "cheers-app-2bfa6",
  storageBucket: "cheers-app-2bfa6.appspot.com",
  messagingSenderId: "536197722780",
  appId: "1:536197722780:web:ed3ce001da5dceee15b359",
  measurementId: "G-30VVXGL7EK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);