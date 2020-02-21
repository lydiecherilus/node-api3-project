const express = require('express');

const router = express.Router();

const Posts = require('./postDb.js');

router.get('/', (req, res) => {
    // do your magic!
    // get all posts
    Posts.get().then(posts => {
        res.status(200).json(posts);
    }).catch(error => {
        console.log(error);
        res.status(500).json({ errorMessage: "The posts information could not be retrieved" })
    });
});


router.get('/:id', validatePostId, (req, res) => {
    // do your magic!
    // get post by id 
    res.status(200).json(req.post);
});


router.delete('/:id', validatePostId, (req, res) => {
    // do your magic!
    // delete a post
    const postId = req.params.id;
    Posts.remove(postId).then(removed => {
        res.status(200).json(removed);
    }).catch(error => {
        console.log(error);
        res.status(500).json({ errorMessage: "The post could not be removed" })
    });
});


router.put('/:id', validatePostId, (req, res) => {
    // do your magic!
    // update a post 
    const postId = req.params.id;
    const { text } = req.body;
    if (text) {
        Posts.update(postId, { text }).then(updated => {
            res.status(200).json(updated);
        }).catch(error => {
            res.status(500).json({ errorMessage: "The post information could not be modified." })
        })
    } else {
        res.status(400).json({ errorMessage: "Please provide text for the post." })
    }
});

// custom middleware

function validatePostId(req, res, next) {
    // do your magic!
    const postId = req.params.id;
    Posts.getById(postId).then((posts) => {
        if (posts) {
            req.post = posts;
            next();
        } else {
            res.status(404).json({ errorMessage: "invalid post id." });
        };
    }).catch(error => {
        console.log(error);
    })
}

module.exports = router;