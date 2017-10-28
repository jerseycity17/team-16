const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const twilio = require('twilio');
const accountSid = functions.config().twilio.sid
const authToken  = functions.config().twilio.token
const client = new twilio(accountSid, authToken);

const twilioNumber = '+13478518941' // your twilio phone number

exports.textStatus = functions.database
       .ref('/Syria/alerts/{alertId}')
       .onWrite(event => {
           console.log("New create of data");
            const alertId = event.params.alertId;
            return admin.database()
                .ref(`/Syria/alerts/${alertId}`)
                .once('value')
                .then(snapshot => snapshot.val())
                .then(alertItem => {
                    const title       = alertItem.title
                    const description = alertItem.description
                    const textMessage = {
                        body: `Title: ${title}\nDescription: ${description}`,
                        to: null,  // Text to this number
                        from: twilioNumber // From a valid Twilio number
                    };
                    admin.database()
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
                })
                .then(message => console.log('success'))
                .catch(err => console.log(err))
});
/// Validate E164 format
function validE164(num) {
    return /^\+?[1-9]\d{1,14}$/.test(num)
}

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
