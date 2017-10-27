import firebase from 'firebase'

// Connect firebase
const firebaseConfig = {
  apiKey: "<your-api-key>",
  authDomain: "<your-auth-domain>",
  databaseURL: "<your-database-url>",
  storageBucket: "<your-storage-bucket>",,
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database()

export { firebase, database }
