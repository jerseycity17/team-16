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
const auth = firebase.auth();
const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.use("/", express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {

    auth.onAuthStateChanged((user) => {
        if(user)
        {
            res.sendFile(__dirname +'/public/home.html');
        }
        else
        {
            res.sendFile(__dirname +'/public/login.html');
        }

    });
    //res.sendFile(__dirname +'/public/home.html');

});



app.post('/send', async (req, res) => {
   alert = req.body;
   await database.ref('Syria/alerts/').push(alert);
   console.log("AFTER ADDING TO DB");
   res.sendFile(__dirname +'/public/home.html');
});

/*var query = firebase.database().ref("users").orderByKey();
query.once("value")
  .then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var key = childSnapshot.key; // "ada"

      // Cancel enumeration
      return true;
  });
});*/
app.get('/alerts', async (req, res) => {
    var alertsDatasnapshot = await database.ref("Syria/alerts").orderByKey().once("value");
    alerts = [];

    alertsDatasnapshot.forEach(function(childSnapshot) {
        alerts.push(childSnapshot.val());
    });
    res.json(alerts);

})
app.post('/register', async function(req, res) {

    var newUserEmail = req.body.email;
    var newUserPass = req.body.pass;

    try {
        await auth.createUserWithEmailAndPassword(newUserEmail, newUserPass);
        res.sendFile(__dirname +'/public/login.html');
    } catch (e) {
        console.log(e)
        res.status(500).json(e);
    }
});

app.get('/register', function (req, res){
    console.log("inside get")
    res.sendFile(__dirname +'/public/register.html');
});

app.post('/logout', async function(req, res) {
    try {
    await auth.signOut();
    } catch (e) {
        res.status(500).json('Error on login');
    }
    res.sendFile(__dirname + '/public/login.html');
});

//Perform authentication
app.get('/login', function (req, res){
    res.sendFile(__dirname + '/public/login.html');
});

app.post('/login', async function(req, res){

    var userEmail = req.body.email;
    var userPassword = req.body.pass;

    try {
        await auth.signInWithEmailAndPassword(userEmail, userPassword);
        res.sendFile(__dirname +'/public/home.html');
    } catch (e) {
        res.status(500).json(e);
    }
});
app.get('*', (req, res) => {
    res.sendStatus(404);
});
app.listen(3000, () => {
    console.log("We've now got a server!");
    console.log("Your routes will be running on http://localhost:3000");
});

const twilio = require('twilio');
const client = new twilio("ACabbc2b33b44f99aa5dbd3602099bd85e", "2bac59072967bb0e26844727613243db");
const twilioNumber = '+13478518941';

let firstTime = true;

database
.ref('/Syria/alerts/')
.on('value', snapshot => {
    if (firstTime) {
        firstTime = false;
        return;
    }
    console.log("New create of data");
     const alertList = snapshot.val();
     console.log(alertList)
     const alertListKey = Object.keys(alertList);
     const most_recent_alert = alertList[alertListKey[alertListKey.length - 1]];
     const title       = most_recent_alert.title
     const description = most_recent_alert.description
     const textMessage = {
         body: `Title: ${title}\nDescription: ${description}`,
         to: null,  // Text to this number
         from: twilioNumber // From a valid Twilio number
     };
     database
         .ref(`/Syria/staff/`)
         .once('value')
         .then((snapshot) => {
             // Send SMS to each person
             const staffList = snapshot.val();
             Object.keys(staffList).map(staffId => {
                 textMessage.to = staffList[staffId].phone_number;
                 return client.messages.create(textMessage);
             });
         })
     .catch(err => console.log(err));
});
