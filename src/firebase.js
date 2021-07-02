import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBGCBuZn8KTtTiejmGcZgUWEAXSoyXW-dM",
  authDomain: "react-phone-book-1f29a.firebaseapp.com",
  projectId: "react-phone-book-1f29a",
  storageBucket: "react-phone-book-1f29a.appspot.com",
  messagingSenderId: "124443298154",
  appId: "1:124443298154:web:ef69221308acd6eea27d13",
  measurementId: "G-6P9BVGJFQZ",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

export const db = firebase.firestore();
