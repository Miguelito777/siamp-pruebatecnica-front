import { initializeApp } from "firebase/app";
//require("firebase/auth");
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";

//import { initializeApp } from 'firebase/app';
//import { getAuth } from "firebase/auth";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAo7L63uB2Je3ssv-s-3yIu10MVbW3ItDA",
  authDomain: "pruebatecnica-mp.firebaseapp.com",
  projectId: "pruebatecnica-mp",
  storageBucket: "pruebatecnica-mp.appspot.com",
  messagingSenderId: "764462842423",
  appId: "1:764462842423:web:86f79944dbf635ec9335b2",
  measurementId: "G-BVHB8S5R01",
};
initializeApp(firebaseConfig);
const auth = getAuth();

const signInWithEmailAndPasswordM = async (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      console.log(userCredential);
      //const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      console.log(errorCode);
      const errorMessage = error.message;
      console.log(errorMessage);
    });
};

const sendPasswordResetEmailM = async (email) => {
  sendPasswordResetEmail(auth, email)
    .then((userCredential) => {
      // Signed in
      console.log("Exito", userCredential);
      //const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      console.log(errorCode);
      const errorMessage = error.message;
      console.log(errorMessage);
    });
};

const logout = () => {
  console.log("I going to close session");
  signOut(auth)
    .then(() => {
      console.log("Session closed succsecfully");
      // Sign-out successful.
    })
    .catch((error) => {
      console.log(error);
      // An error happened.
    });
};
export { auth, signInWithEmailAndPasswordM, sendPasswordResetEmailM, logout };
