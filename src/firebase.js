
// import { initializeApp } from "firebase/app";



 

// const firebaseConfig = {
//   apiKey: "AIzaSyDCqU_lCOh4uul6enGr4WL69A7Pk0Tgy7M",
//   authDomain: "danish-b8bba.firebaseapp.com",
//   projectId: "danish-b8bba",
//   storageBucket: "danish-b8bba.appspot.com",
//   messagingSenderId: "32328627815",
//   appId: "1:32328627815:web:c31c2dca494a61fb6cc6c2"
// };


// const app = initializeApp(firebaseConfig);



// firebase.js

// import { initializeApp } from "firebase/app";
// import { getStorage } from "firebase/storage";
// import { getDatabase } from "firebase/database";



import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";







const firebaseConfig = {
  apiKey: "AIzaSyDCqU_lCOh4uul6enGr4WL69A7Pk0Tgy7M",
  authDomain: "danish-b8bba.firebaseapp.com",
  projectId: "danish-b8bba",
  storageBucket: "danish-b8bba.appspot.com",
  messagingSenderId: "32328627815",
  appId: "1:32328627815:web:c31c2dca494a61fb6cc6c2"
};









const app = initializeApp(firebaseConfig);
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };

