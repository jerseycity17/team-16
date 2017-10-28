import * as firebase from 'firebase';

const config = {
   apiKey: "AIzaSyBs7lc-PurV3_2rxna2SlPmGFEfC0p7-M0",
   authDomain: "codeforgood-team16.firebaseapp.com",
   databaseURL: "https://codeforgood-team16.firebaseio.com",
   projectId: "codeforgood-team16",
   storageBucket: "codeforgood-team16.appspot.com",
   messagingSenderId: "863184103451"
 };


firebase.initializeApp(config);
console.log(firebase)
const database = firebase.database()

// const mainref


export { firebase , database }
