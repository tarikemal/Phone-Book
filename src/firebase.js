import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  // config
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

export const db = firebase.firestore();
