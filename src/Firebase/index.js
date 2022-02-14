import firebase from "firebase/app";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyACD4xru2H-UdTnl0qEEKvb5zoNlpRtOzY",
    authDomain: "react-js-coder--lif.firebaseapp.com",
    projectId: "react-js-coder--lif",
    storageBucket: "react-js-coder--lif.appspot.com",
    messagingSenderId: "1000961519708",
    appId: "1:1000961519708:web:b2c551407efeea0d0df699",
    measurementId: "G-RJX8TKNMK2"
};

const app = firebase.initializeAoo(firebaseConfig);

export const getFirebase = () => app;

export const getFirestore = () => firebase.firestore(app);