import { initializeApp } from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Config here
const firebaseConfig = {
  apiKey: "AIzaSyC5dbuChJjI7cqbjIlsCOQpTH0oXPGXKe0",
  authDomain: "coedify-website.firebaseapp.com",
  projectId: "coedify-website",
  storageBucket: "coedify-website.appspot.com",
  messagingSenderId: "14832729740",
  appId: "1:14832729740:web:011d5a7d493300893105a9",
  measurementId: "G-TV27N8BE58",
};

const firebase = initializeApp(firebaseConfig);
// firebase.firestore().settings({ timestampsInSnapshots: true });

//
export { firebase };
