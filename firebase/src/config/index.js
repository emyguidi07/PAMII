import firebase from 'firebase/app';

import 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDihJtZeMMaYM8rBDt5Yrs-BE-EBxdBnKE",
    authDomain: "projetinhofellas-27c51.firebaseapp.com",
    projectId: "projetinhofellas-27c51",
    storageBucket: "projetinhofellas-27c51.appspot.com",
    messagingSenderId: "655119596228",
    appId: "1:655119596228:web:7ed0487b7c067c3c85e791",
    measurementId: "G-DQ9R68G290"
  };
  
// Initialize Firebase

if (firebase.app.lenght === 0) {
    Firebase = firebase.initializeApp(firebaseConfig);
}

export default Firebase;