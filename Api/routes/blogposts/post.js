const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Posts = require('../../models/postModel');
const commentModel = require('../../models/commentModel');

const postRouter = express.Router();

postRouter.use(bodyParser.json());

postRouter.route('/')
    .get((req, res, next) => {
        Posts.find({})
            .then((posts) => {
                res.statusCode = 200;
                res.setHeader('content-Type', 'application/json');
                res.json(posts);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .post((req, res, next) => {
        Posts.create(req.body)
            .then((post) => {
                console.log(post)
                res.statusCode = 200;
                res.setHeader('content-Type', 'application/json');
                res.json(post);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .delete((req, res, next) => {
        Posts.remove({})
            .then((resp) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(resp);
            }, (err) => next(err))
            .catch((err) => next(err));
    });

postRouter.route('/:postId')
    .get((req, res, next) => {
        Posts.findById(req.params.postId)
            .then((post) => {
                res.statusCode = 200;
                res.setHeader('content-Type', 'application/json');
                res.json(post);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .put((req, res, next) => {
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
    .delete((req, res, next) => {
        Posts.findByIdAndRemove(req.params.postId)
            .then((deleteResponse) => {
                res.statusCode = 200;
                res.setHeader('content-Type', 'application/json');
                res.json(deleteResponse);
            }, (err) => next(err))
            .catch((err) => next(err));
    });


module.exports = postRouter;
