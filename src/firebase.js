import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/storage";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBQuDacZZl6hP9qEm3pP1TIReIe0uy7Vv4",
  authDomain: "shop-for-me-43ffe.firebaseapp.com",
  projectId: "shop-for-me-43ffe",
  storageBucket: "shop-for-me-43ffe.appspot.com",
  messagingSenderId: "732408510947",
  appId: "1:732408510947:web:90ddc9a29d60ef7b5ac8d6",
  measurementId: "G-09QG0WZJ81"
});


const auth = firebaseApp.auth();
const db = firebaseApp.firestore(); 
const storage = firebaseApp.storage();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const appleProvider = new firebase.auth.OAuthProvider("apple.com");

export { auth, db, storage, googleProvider, appleProvider };
export default firebaseApp;
