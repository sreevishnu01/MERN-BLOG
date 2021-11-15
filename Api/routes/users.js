const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const User = require('../models/userModel');
const passport = require('passport');
const authenticate = require('../authenticate');
const cors = require('../routes/cors');

router.use(bodyParser.json());
/* GET users listing. */
router.get('/', cors.corsWithOptions, function (req, res, next) {
  res.send('respond with a resource');
});


router.post('/signup', cors.corsWithOptions, (req, res, next) => {
  User.register(new User({ username: req.body.username }), req.body.password, (err, user) => {
    if (err) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'application/json');
      res.json({ err: err });
    }
    else {
      if (req.body.firstname)
        user.firstname = req.body.firstname;
      if (req.body.lastname)
        user.lastname = req.body.lastname;
      user.save((err, user) => {
        if (err) {
          res.statusCode = 500;
          res.setHeader('Content-Type', 'application/json');
          res.json({ err: err });
          return;
        }

        passport.authenticate('local')(req, res, () => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json({ success: true, status: "Registration successful" })

        });
      });


    }
  });
});


router.post('/login', cors.corsWithOptions, passport.authenticate('local'), (req, res) => {
  let token = authenticate.getToken({ _id: req.user._id });
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json({ success: true, id: req.user._id, username: req.user.firstname, token: token, categories: req.user.categories });
});


router.get('/logout', cors.corsWithOptions, authenticate.varifyUser, (req, res) => {
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

router.route('/:userId')
  .options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
  .get(cors.cors, (req, res, next) => {
    User.findById(req.params.userId)
      .then((user) => {
        res.statusCode = 200;
        res.setHeader('content-Type', 'application/json');
        res.json(user);
      }, (err) => next(err))
      .catch((err) => next(err));
  })

  .put(cors.corsWithOptions, authenticate.varifyUser, (req, res) => {
    User.findByIdAndUpdate(req.params.userId, {
      $set: req.body
    }, { new: true })
      .then((post) => {
        res.statusCode = 200;
        res.setHeader('content-Type', 'application/json');
        res.json(post);
      }, (err) => next(err))
      .catch((err) => next(err));
  });

module.exports = router;
