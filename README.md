# WeRC
## Field Agent React Native App
## Admin Panel
### Description
This is the admin panel to submit alerts and push notifications to the database for the field agents to recieve. It is an express server with node.js connected to Firebase to push the alerts.

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
