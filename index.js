// code away!
require('dotenv').config() // this will read everything in .env

const express = require('express');
const UserRouter = require('./users/userRouter')
const PostRouter = require('./posts/postRouter')

const cors = require('cors');
const server = require('./server.js');

server.use(cors());
server.use(express.json());
server.use('/api/users', UserRouter)
server.use('/api/posts', PostRouter)

server.listen(5000, () => {
    console.log('\n* Server Running on http://localhost:5000 *\n');
});