const express = require('express');

const router = express.Router();

const Users = require('./userDb.js');
const Posts = require('../posts/postDb.js');


router.post('/', validateUser, (req, res) => {
  // do your magic!
  // create a user
  Users.insert(req.body).then(users => {
    return res.status(201).json(users);
  })
});


router.post('/:id/posts', validateUser, validatePost, (req, res) => {
  // do your magic!
  // create a post for a user
  Posts.insert({ user_id: req.params.id, text: req.body.text }).then(post => {
    res.status(200).json(post)
  }).catch(error => {
    console.log(error);
    res.status(500).json({ errorMessage: "There was an error while saving the post to the database" })
  });
});


router.get('/', (req, res) => {
  // do your magic! 
  // get all users
  Users.get().then(users => {
    res.status(200).json(users);
  }).catch(error => {
    console.log(error);
    res.status(500).json({ errorMessage: "The users information could not be retrieved" })
  });
})


router.get('/:id', validateUserId, (req, res) => {
  // do your magic! 
  // get user by id
  res.status(200).json(users);
});


router.get('/:id/posts', (req, res) => {
  // do your magic!
  // get users posts
  Users.getUserPosts(req.params.id).then((posts) => {
    if (posts) {
      res.status(200).json(posts);
    } else {
      res.status(404).json({ errorMessage: "The user with the specified ID does not exist." })
    }
  }).catch(error => {
    console.log(error);
    res.status(500).json({ errorMessage: "The posts information could not be retrieved" })
  });
});


router.delete('/:id', (req, res) => {
  // do your magic!
  // delete a user
  const userId = req.params.id;
  Users.remove(userId).then(removed => {
    if (removed) {
      res.status(200).json(removed);
    } else {
      res.status(500).json({ errorMessage: "The user with the specified ID does not exist." })
    }
  }).catch(error => {
    console.log(error);
    res.status(500).json({ errorMessage: "The user could not be removed" })
  });
});


router.put('/:id', (req, res) => {
  // do your magic!
  // update a user 
  const userId = req.params.id;
  const { name } = req.body;
  if (name) {
    Users.update(userId, { name }).then(updated => {
      if (updated) {
        res.status(200).json(updated);
      } else {
        res.status(500).json({ errorMessage: "The user with the specified ID does not exist." })
      }
    }).catch(error => {
      res.status(500).json({ errorMessage: "The user information could not be modified." })
    })
  } else {
    res.status(400).json({ errorMessage: "Please provide a name for the user." })
  }
})


//custom middleware

function validateUserId(req, res, next) {
  // do your magic!
  const userId = req.params.id;
  Users.getById(userId).then((users) => {
    if (users) {
      res.status(200).json(users);
    } else {
      res.status(404).json({ errorMessage: "The user with the specified ID does not exist." });
    };
  }).catch(error => {
    console.log(error);
    res.status(500).json({ errorMessage: "The user information could not be retrieved." })
  });
}


function validateUser(req, res, next) {
  // do your magic!
  if (req.body) {
    if (req.body.name) {
      next();
    } else {
      res.status(400).json({ message: "missing user data" })
    }
  } else {
    res.status(400).json({ message: "missing required name field" })
  }
}

function validatePost(req, res, next) {
  // do your magic!
  if (req.body) {
    if (req.body.text) {
      next();
    } else {
      res.status(400).json({ message: "missing post data" })
    }
  } else {
    res.status(400).json({ message: "missing required text field" })
  }
}

module.exports = router;