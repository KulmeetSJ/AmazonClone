
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyDHs-R07s0HDKdQPRjUSQw58o57lbptktw",
    authDomain: "kulmeet01.firebaseapp.com",
    projectId: "kulmeet01",
    storageBucket: "kulmeet01.appspot.com",
    messagingSenderId: "306226246353",
    appId: "1:306226246353:web:086546a1162eb16b938bf0",
    measurementId: "G-RH7F447W4B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);