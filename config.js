import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAuAcNXPmJyYjerB6AVCKrYpH3SCgp4goo",
    authDomain: "class-test-4af5c.firebaseapp.com",
    databaseURL: "https://class-test-4af5c-default-rtdb.firebaseio.com",
    projectId: "class-test-4af5c",
    storageBucket: "class-test-4af5c.appspot.com",
    messagingSenderId: "91424485734",
    appId: "1:91424485734:web:4d56adc0a2ffc3788458a7",
    measurementId: "G-1WJQ3QQX02"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();