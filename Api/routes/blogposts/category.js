const express = require('express');
const bodyParser = require('body-parser');
const Category = require('../../models/categoryModel');
const authenticate = require('../../authenticate');

const categoryRouter = express.Router();

categoryRouter.use(bodyParser.json());




categoryRouter.route('/')
    .get((req, res, next) => {
        Category.find(req.query)
            .then((cat) => {
                res.statusCode = 200;
                res.setHeader('content-Type', 'application/json');
                res.json(cat);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .post(authenticate.varifyUser,(req, res, next) => {
        Category.create(req.body)
            .then((cat) => {
                res.statusCode = 200;
                res.setHeader('content-Type', 'application/json');
                res.json(cat);
            }, (err) => next(err))
            .catch((err) => next(err));
    });


categoryRouter.route('/:catId')
    .get((req, res, next) => {
        Category.findById(req.params.catId)
            .then((cat) => {
                res.statusCode = 200;
                res.setHeader('content-Type', 'application/json');
                res.json(cat);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .put(authenticate.varifyUser,(req, res, next) => {
        Category.findByIdAndUpdate(req.params.catId, {
            $set: req.body
        }, { new: true })
            .then((cat) => {
                res.statusCode = 200;
                res.setHeader('content-Type', 'application/json');
                res.json(cat);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .delete(authenticate.varifyUser,(req, res, next) => {
        Category.findByIdAndRemove(req.params.catId)
            .then((deleteResponse) => {
                res.statusCode = 200;
                res.setHeader('content-Type', 'application/json');
                res.json(deleteResponse);
            }, (err) => next(err))
            .catch((err) => next(err));
    });


module.exports = categoryRouter;