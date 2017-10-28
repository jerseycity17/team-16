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
});
/*database.ref('/Syria/emergency').once('value').then((emergency_contact) => {
            emergency_contact = emergency_contact.val();
            let emergency = [];
            Object.keys(emergency_contact).forEach((contact_field) => {
                let contact_list = Object.keys(emergency_contact[contact_field]).map((contact_item) => {
                    return contact_item
                });
            });*/
app.get('/alerts', async (req, res) => {
    var alerts = await database.ref("alerts").once("value");
    console.log(alerts);
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