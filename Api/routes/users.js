const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const User = require('../models/userModel');
const passport = require('passport');
const authenticate = require('../authenticate');

router.use(bodyParser.json());
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});


router.post('/signup', (req, res, next) => {
  User.register(new User({ username: req.body.username }), req.body.password, (err, user) => {
    if (err) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'application/json');
      res.json({ err: err });
    }
    else {
      passport.authenticate('local')(req, res, () => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({ success: true, status: "Registration successful" })

      });
    }
  });
});


router.post('/login', passport.authenticate('local'), (req, res) => {
  let token = authenticate.getToken({ _id: req.user._id });
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json({ success: true, token: token, status: "You are successfully login" });
});


router.get('/logout', authenticate.varifyUser, (req, res) => {
  if (req.session) {
    // req.session.destroy();
    res.clearCookie('jwt');
    res.redirect('/');
  }
  else {
    var err = new Error('You are not logged in!');
    err.status = 403;
    next(err);
  }
});


module.exports = router;
