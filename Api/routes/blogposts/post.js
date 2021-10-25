const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Posts = require('../../models/postModel');
const commentModel = require('../../models/commentModel');
const authenticate = require('../../authenticate');
const cors = require('../cors');

const postRouter = express.Router();

postRouter.use(bodyParser.json());

postRouter.route('/')
    .options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
    .get(cors.cors, (req, res, next) => {
        Posts.find(req.query)
            .populate('author')
            .then((posts) => {
                res.statusCode = 200;
                res.setHeader('content-Type', 'application/json');
                res.json(posts);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .post(cors.corsWithOptions, authenticate.varifyUser, (req, res, next) => {
        req.body.author = req.user._id;
        Posts.create(req.body)
            .then((post) => {
                console.log(post)
                res.statusCode = 200;
                res.setHeader('content-Type', 'application/json');
                res.json(post);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .delete(cors.corsWithOptions, authenticate.varifyUser, (req, res, next) => {
        Posts.remove({})
            .then((resp) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(resp);
            }, (err) => next(err))
            .catch((err) => next(err));
    });

postRouter.route('/:postId')
    .options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
    .get(cors.cors, (req, res, next) => {
        Posts.findById(req.params.postId)
            .populate('author')
            .then((post) => {
                res.statusCode = 200;
                res.setHeader('content-Type', 'application/json');
                res.json(post);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .put(cors.corsWithOptions, authenticate.varifyUser, (req, res, next) => {
        Posts.findByIdAndUpdate(req.params.postId, {
            $set: req.body
        }, { new: true })
            .then((post) => {
                res.statusCode = 200;
                res.setHeader('content-Type', 'application/json');
                res.json(post);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .delete(cors.corsWithOptions, authenticate.varifyUser, (req, res, next) => {
        Posts.findByIdAndRemove(req.params.postId)
            .then((deleteResponse) => {
                res.statusCode = 200;
                res.setHeader('content-Type', 'application/json');
                res.json(deleteResponse);
            }, (err) => next(err))
            .catch((err) => next(err));
    });


module.exports = postRouter;
