import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDJiY9qH4SNqSEWkIun9-Etwe9ihqM3QpI',
  authDomain: 'tinder-clone-cd819.firebaseapp.com',
  databaseURL: 'https://tinder-clone-cd819.firebaseio.com',
  projectId: 'tinder-clone-cd819',
  storageBucket: 'tinder-clone-cd819.appspot.com',
  messagingSenderId: '973911069684',
  appId: '1:973911069684:web:1ee9a73375f14dfb2c1fa1',
  measurementId: 'G-0GQ80M05PH',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;
