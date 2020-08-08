import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

var firebaseConfig = {
    apiKey: "AIzaSyBnzXINwe_e4gxBvS1AIAgIzXtl9vR6N1g",
    authDomain: "photosgram-64d51.firebaseapp.com",
    databaseURL: "https://photosgram-64d51.firebaseio.com",
    projectId: "photosgram-64d51",
    storageBucket: "photosgram-64d51.appspot.com",
    messagingSenderId: "850533071744",
    appId: "1:850533071744:web:962214aebe4fcf62ef9f65"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {projectFirestore, projectStorage, timestamp};
