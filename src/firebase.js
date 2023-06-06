import firebase from "firebase/compat/app";
import "firebase/compat/firestore"
import "firebase/compat/storage"
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCwFOF8iJ8wIDRkMuk_XULbGqy5XdJvzr4",
  authDomain: "cloud-3b54d.firebaseapp.com",
  projectId: "cloud-3b54d",
  storageBucket: "cloud-3b54d.appspot.com",
  messagingSenderId: "898688646583",
  appId: "1:898688646583:web:707df99a99dca2a7e2fc32"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firestore = firebaseApp.firestore();
const storage = firebase.storage();
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
export {
  storage,firestore as default, auth, provider
}

