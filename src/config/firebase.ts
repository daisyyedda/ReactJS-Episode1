// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJwCfJx6IXkiXfDc3iMjTVMqXN0OXKLaM",
  authDomain: "react-app-c6fd3.firebaseapp.com",
  projectId: "react-app-c6fd3",
  storageBucket: "react-app-c6fd3.appspot.com",
  messagingSenderId: "1081154636535",
  appId: "1:1081154636535:web:3870135972c194e62f21f2",
  measurementId: "G-ZZSMZCDHYG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
