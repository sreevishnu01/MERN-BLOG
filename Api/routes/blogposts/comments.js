const express = require('express');
const bodyParser = require('body-parser');
const Posts = require('../../models/postModel');
const authenticate = require('../../authenticate');

const postRouter = express.Router();

postRouter.use(bodyParser.json());

postRouter.route('/:postId/comments')
    .get((req, res, next) => {
        Posts.findById(req.params.postId)
            .then((post) => {
                if (post != null) {
                    res.statusCode = 200;
                    res.setHeader('content-Type', 'application/json');
                    res.json(post.comments);
                }
                else {
                    err = new Err('post ' + req.params.postId + ' not found');
                    err.status = 404;
                    return next(err);
                }

            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .post(authenticate.varifyUser, (req, res, next) => {
        Posts.findById(req.params.postId)
            .then((post) => {
                if (post != null) {
                    post.comments.push(req.body);
                    post.save()
                        .then((post) => {
                            res.statusCode = 200;
                            res.setHeader('content-Type', 'application/json');
                            res.json(post);
                        })
                }
                else {
                    err = new Err('post ' + req.params.postId + ' not found');
                    err.status = 404;
                    return next(err);
                }
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .delete(authenticate.varifyUser, (req, res, next) => {
        Posts.findById(req.params.postId)
            .then((post) => {
                if (post != null) {
                    for (let i = (post.comments.length - 1); i >= 0; i--) {
                        post.comments.id(post.comments[i]._id).remove();
                    }
                    post.save()
                        .then((post) => {
                            res.statusCode = 200;
                            res.setHeader('Content-Type', 'application/json');
                            res.json(post);
                        }, (err) => next(err));
                }
                else {
                    err = new Err('post ' + req.params.postId + ' not found');
                    err.status = 404;
                    return next(err);
                }
            }, (err) => next(err))
            .catch((err) => next(err));
    });


postRouter.route('/:postId/comments/:commentId')
    .get(authenticate.varifyUser, (req, res, next) => {
        Posts.findById(req.params.postId)
            .then((post) => {
                if (post != null && post.comments.id(req.params.commentId) != null) {
                    res.statusCode = 200;
                    res.setHeader('content-Type', 'application/json');
                    res.json(post.comments.id(req.params.commentId));
                }
                else if (post == null) {
                    err = new Error('Post ' + req.params.postId + ' not found');
                    err.status = 404;
                    return next(err);
                }
                else {
                    err = new Err('Comment ' + req.params.commentId + ' not found');
                    err.status = 404;
                    return next(err);
                }
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .put(authenticate.varifyUser, (req, res, next) => {
        Posts.findById(req.params.postId)
            .then((post) => {
                if (post != null && post.comments.id(req.params.commentId) != null) {
                    if (req.body.rating) {
                        post.comments.id(req.params.commentId).rating = req.body.rating;
                    }
                    if (req.body.comment) {
                        post.comments.id(req.params.commentId).comment = req.body.comment;
                    }
                    post.save()
                        .then((post) => {
                            res.statusCode = 200;
                            res.setHeader('Content-Type', 'application/json');
                            res.json(post);
                        }, (err) => next(err));
                }
                else if (post == null) {
                    err = new Error('Post ' + req.params.postId + ' not found');
                    err.status = 404;
                    return next(err);
                }
                else {
                    err = new Err('Comment ' + req.params.commentId + ' not found');
                    err.status = 404;
                    return next(err);
                }
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .delete(authenticate.varifyUser, (req, res, next) => {
        Posts.findById(req.params.postId)
            .then((post) => {
                if (post != null && post.comments.id(req.params.commentId) != null) {
                    post.comments.id(req.params.commentId).remove();
                    post.save()
                        .then((post) => {
                            res.statusCode = 200;
                            res.setHeader('Content-Type', 'application/json');
                            res.json(post);
                        }, (err) => next(err));
                }
                else if (post == null) {
                    err = new Error('Post ' + req.params.postId + ' not found');
                    err.status = 404;
                    return next(err);
                }
                else {
                    err = new Err('Comment ' + req.params.commentId + ' not found');
                    err.status = 404;
                    return next(err);
                }
            }, (err) => next(err))
            .catch((err) => next(err));
    });


module.exports = postRouter;
