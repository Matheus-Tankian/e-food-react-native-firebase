import firebase from 'firebase';

let config = {
  apiKey: "AIzaSyDmz9h2uNx9jbwtr80ydOprqeh0sXbJcTU",
  authDomain: "aula-firebase-ifma.firebaseapp.com",
  projectId: "aula-firebase-ifma",
  storageBucket: "aula-firebase-ifma.appspot.com",
  messagingSenderId: "221289936236",
  appId: "1:221289936236:web:e00dc75e8db3454e112f49"
};

let app = firebase.initializeApp(config);
export const db = app.firestore();
export const auth = app.auth();
