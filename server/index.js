const express = require('express');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');

require('./services/passport');

//creating an app instance
const app = express();

//bodyParser is middleware for express and for use that middleware we need to use in that express app.
app.use(bodyParser.json());

//Cookie session is middleware which is used to maintain cookies in the system
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: 'checkoslovakida'
    })
);

//Passport is middleware which is used to authenticate user with strategy that are used.
app.use(passport.initialize());
app.use(passport.session());

//Including routes
require('./routes/authRoutes')(app);
require('./routes/userRoutes')(app);

const PORT = process.env.PORT || 5000; //env variable is not defined when we are using on localhost 
app.listen(PORT, () => {
    console.log('Server listening on port : ' + PORT );
});