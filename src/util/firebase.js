import firebase from 'firebase';

let config = {
  apiKey: "AIzaSyBVc7QUmvdM-lwfEqiAYLFbv9pQ2f3qEPE",
  authDomain: "fb-crud-react-d403c.firebaseapp.com",
  projectId: "fb-crud-react-d403c",
  storageBucket: "fb-crud-react-d403c.appspot.com",
  messagingSenderId: "87609536064",
  appId: "1:87609536064:web:e723cd64592ae1014fb9a5"
};

let app = firebase.initializeApp(config);
export const db = app.firestore();
export const auth = app.auth();

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBVc7QUmvdM-lwfEqiAYLFbv9pQ2f3qEPE",
//   authDomain: "fb-crud-react-d403c.firebaseapp.com",
//   projectId: "fb-crud-react-d403c",
//   storageBucket: "fb-crud-react-d403c.appspot.com",
//   messagingSenderId: "87609536064",
//   appId: "1:87609536064:web:e723cd64592ae1014fb9a5"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// apiKey: "AIzaSyDmz9h2uNx9jbwtr80ydOprqeh0sXbJcTU",
// authDomain: "aula-firebase-ifma.firebaseapp.com",
// projectId: "aula-firebase-ifma",
// storageBucket: "aula-firebase-ifma.appspot.com",
// messagingSenderId: "221289936236",
// appId: "1:221289936236:web:e00dc75e8db3454e112f49"