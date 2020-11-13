import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCBEZRu1L4HXNVVZ_oO0-q8chYYc5_zmg8",
  authDomain: "pbzon-716e1.firebaseapp.com",
  databaseURL: "https://pbzon-716e1.firebaseio.com",
  projectId: "pbzon-716e1",
  storageBucket: "pbzon-716e1.appspot.com",
  messagingSenderId: "405577682517",
  appId: "1:405577682517:web:11caf5049f667303c10edc",
  measurementId: "G-L924GLXXQN",
});

const auth = firebase.auth();

export { auth };
