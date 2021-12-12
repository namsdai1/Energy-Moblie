import firebase from "firebase/compat/app";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyALbQCRlUqXTq1299FurfJfrzmw7noVUPw",
  authDomain: "enegrymoblie.firebaseapp.com",
  projectId: "enegrymoblie",
  storageBucket: "enegrymoblie.appspot.com",
  messagingSenderId: "364727074372",
  appId: "1:364727074372:web:e9f5781f9e06ae2efe0611",
  measurementId: "G-0KEM6L1YVN",
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
