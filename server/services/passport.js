const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const base64 = require('base-64');
const KEYS = require('../config/contants');

passport.use(new LocalStrategy(
    function(username, password, done) {
        const encodeUsername = base64.encode(username);
        const encodePassword = base64.encode(password);
        if (encodeUsername === KEYS.CREDENTIAL && encodePassword === KEYS.CREDENTIAL) {
            const user = { username: username, password: password, userValid: true };
            return done(null, user)
        } else {
            const error = { message: 'Not a valid User' };
            return done(error);
        }
    }
));