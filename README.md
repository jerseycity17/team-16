# WeRC
## Field Agent React Native App
The App was built using React Native, a hybrid framework for iOS and Android that is almost comparable in speed to native performance. We broke down the App to multiple screens, where nearly all screens have a navbar on the top for alerts. Issues are bolded in paragraph and are referenced down below.

NavBar
- A black/red bar that appears on the top that displays the most recent alert (__Issue 1__), and when clicked on also redirects the user to the AlertScreen
- NavBar also contains functionality for navigating between screens.

HomeScreen
- The first screen that the displays which contains a UI that allows the user to navigate between every other screen
- On load, the NavScreen gets the geo-coordinates of the user and passes that through a method to determine the current region that the user is in. This information is stored in the global store (through redux), and is used later on to give local warnings and information. (Only implemented for Syria, __Issue 2__)
- The three other screens, the user can access through touch are the ContactScreen, HealthScreen, and CustomsScreen

ContactScreen
- The ContactScreen is a virtual contact card similar to the IRC one. We wanted to make the card exactly like the card by having it landscape oriented and by pressing a button on the top right to flip the card over to the back. However, we could not find the necessary code in RN to work in landscape mode without errors (__Issue 3__).
- We also intended the contact screen to have one touch dialing, that is, when the user touches a person's contact, the phone immediately starts dialing the targeted person's number. (__Issue 4__)

CustomsScreen
- The CustomsScreen tells local customs in specific regions that the user should be cautious of to avoid danger.
- The current implementation is a List that is taken from an online firebase, we might want to have this data stored locally for offline access (__Issue 5__)

HealthScreen
- HealthScreen informs users of health hazards in the area such as diseases, vaccines necessary, humidity, temperature, and etc.
- Current setup only has vaccines category (__Issue 6__)
- Also, we might want to make this offline as well (__Issue 7__)

AlertScreen
- The alert screen pulls from our online database and presents a list of alerts by posted order.
- We need to implement caching (__Issue 8__) in case the user is offline, that way he/she still has access to the last updated alerts

EmeregencyContactScreen
- This screen only pops up when a certain value in our online database is True. This means that an IRC Admin is demanding a safety check.
- Currently this screen works well on the HomeScreen, but may sometimes not pop up properly on other screens (__Issue 9__)
- We also should add another button that allows the user to indicate he/she is not safe. Currently the only option is that the user can indicate he/she is safe (which may not always be the case). (__Issue 10__)

### ReactNative APP Issues/Improvement
1. NavBar currently only displays static data on the top, but the AlertScreen displays real time alerts from Firebase. NavBar needs to incorporate firebase to take in and print the most recent alert
2. Need to create more regions for testing, and ensure that the location feature is properly working for any region.
3. Need to find out how to design components in landscape mode, or alternatively, how to orient components to work in landscape mode.
4. Make all phone numbers a TouchableOpacity, thus by making them clickable and having a function called onPress(). onPress() then needs to access the phone and dial the selected phone number.
5. Store customs offline? We can store customs in a CustomsDictionary where the key is the region and the value is the custom's list
6. Implement other categories such as Temperature, Humidity, Diseases
7. Store data offline? Similar to __Issue 5__
8. Add offline caching to AlertScreen
9. Fix EmeregencyContactScreen on every screen
10. Add a button that allows the user to tell an Admin he is not safe. This button also needs a method that sends a personal message to an admin (maybe through Twilio?).
11. The app needs major refactoring in all if the files, and we should aim for component reusability with all of our components.
12. We also currently have our database file as a value of a dictionary key. We should break up our Redux design by adding multiple reducers (possibly a reducer for each screen's respective data since they are mainly independent)


## Admin Panel
### Description
This is the admin panel to submit alerts and push notifications to the database for the field agents to recieve. It is an express server with node.js connected to Firebase.

### How To Start
1. Navigate to team-16/admin
2. Run npm install from console to get the node_modules for running the server
3. Run npm start (can see exactly what this command is doing in package.json) to start the express server.
4. Navigate in a browser such as Chrome to localhost:3000 this should bring you to the login page
5. You can either register new credentials with the register button or continue with credentials that were already made.
    - Example: username: asupkay@gmail.com password: pancakes1 is valid right now
6. This should bring you to the dashboard where you are able to push alerts and checkin notifications
7. Submit an alert and it should push to the alerts list down below
8. Checkin push will go directly to their phone.

### Things That Need Improvement
- The routes that are in the app.js need to be moved into another file located in routes/login.js, routes/register.js and so on. Essentially split it up for readability (works as is but is not convention)
- Some routes might be wrong such as a 'get' when it is supposed to be a 'post'
- Database logging should be moved to a file in data/alerts.js or others depending on what it is doing.
- There is an error printed in console when switching from the login screen to the dashboard does not crash the server but should be fixed
- Need to add a way for the admin to set the country right now it is hardcoded to push to the users in Syria so need to change the query from 'Syria/alerts' to location + '/alerts' to make it variable.
- Make an interface for the admin to read the database for check ins.
