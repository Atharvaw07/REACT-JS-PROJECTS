// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgzBi2r24H3ksqd8RDy9wAEmADGMhZ-ls",
  authDomain: "vite-contact-ec973.firebaseapp.com",
  projectId: "vite-contact-ec973",
  storageBucket: "vite-contact-ec973.appspot.com",
  messagingSenderId: "556514152158",
  appId: "1:556514152158:web:06ab8057b9bddf5ffbbc4f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)