import React from 'react';
import ReactDOM from 'react-dom';
import * from 'firebase';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const firebaseConfig = {
    apiKey: "<your-api-key>",
    authDomain: "<your-auth-domain>",
    databaseURL: "<your-database-url>",
    storageBucket: "<your-storage-bucket>",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
