import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref, uploadBytes } from "firebase/storage";

import "firebase/storage";
// Config here
const firebaseConfig = {
  apiKey: "AIzaSyD6D5el9b7b6GBTdI5LO-NBJ44wbG1tSMY",
  authDomain: "coedify-tech.firebaseapp.com",
  projectId: "coedify-tech",
  storageBucket: "coedify-tech.appspot.com",
  messagingSenderId: "167707086855",
  appId: "1:167707086855:web:247bb4933d8f7393e29aa2",
  measurementId: "G-MT68WB8G2Z",
};

const firebase = initializeApp(firebaseConfig);
const db = getFirestore();
const storage = getStorage(firebase);

export { firebase, db, storage, ref, uploadBytes };
