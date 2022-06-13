// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC1qNav-qIag7xNQ_2vQLTeHpr9pC8TnDE",
    authDomain: "admin-portal-753f7.firebaseapp.com",
    projectId: "admin-portal-753f7",
    storageBucket: "admin-portal-753f7.appspot.com",
    messagingSenderId: "576055802829",
    appId: "1:576055802829:web:04c0eded242e2a9a4fa284",
    measurementId: "G-BSSVJ24PHP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export default auth;