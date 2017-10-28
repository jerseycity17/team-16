const express = require("express");
const bodyParser = require("body-parser");
const firebase = require("firebase");
var config = firebase.initializeApp({
    apiKey: "AIzaSyBs7lc-PurV3_2rxna2SlPmGFEfC0p7-M0",
    authDomain: "codeforgood-team16.firebaseapp.com",
    databaseURL: "https://codeforgood-team16.firebaseio.com",
    projectId: "codeforgood-team16",
    storageBucket: "codeforgood-team16.appspot.com",
    messagingSenderId: "863184103451"
});
const database = firebase.database();
const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.use("/", express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname +'/public/home.html');
});

app.get('*', (req, res) => {
    res.sendStatus(404);
});

app.post('/send', async (req, res) => {
   alert = req.body;
   await database.ref('Syria/alerts/').push(alert);
   console.log(alert)
});

app.listen(3000, () => {
    console.log("We've now got a server!");
    console.log("Your routes will be running on http://localhost:3000");
});