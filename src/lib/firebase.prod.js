import { initializeApp } from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Config here
const firebaseConfig = {
  apiKey: "AIzaSyDk2jfEDvIxeSPBzTs_6LqNUJR5zAgnu6Q",
  authDomain: "coedify-technology.firebaseapp.com",
  projectId: "coedify-technology",
  storageBucket: "coedify-technology.appspot.com",
  messagingSenderId: "868533032762",
  appId: "1:868533032762:web:fa996941737ec1b1296203",
  measurementId: "G-PQYK3R793S",
};

const firebase = initializeApp(firebaseConfig);

//
export { firebase };
