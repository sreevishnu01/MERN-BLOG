const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/userModel');
let JwtStrategy = require('passport-jwt').Strategy;
let ExtractJwt = require('passport-jwt').ExtractJwt;
let jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens

// env varible
require('dotenv').config();

let key = process.env.secretkey;



exports.local = passport.use(new LocalStrategy(User.authenticate()));
// passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

exports.getToken = function (user) {
    return jwt.sign(user, key, { expiresIn: 3000 });
};




let options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = key;

exports.jwtPassport = passport.use(new JwtStrategy(options, (jwt_payload, done) => {
    console.log("JWT payload: ", jwt_payload);
    User.findOne({ _id: jwt_payload._id }, (err, user) => {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        }
        else {
            return done(null, false);
        }

    });
}));

exports.varifyUser = passport.authenticate('jwt', { session: false });

