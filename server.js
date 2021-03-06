const express = require('express');
const helmet = require('helmet')

const server = express();
server.use(helmet()); // built-in middleware 
server.use(logger);

server.get('/', (req, res) => {
  res.status(200).json({message: process.env.SECRET_MESSAGE || 'Lets write some middleware!'});

// server.get('/', (req, res) => {
//   res.send(`<h2>Let's write some middleware!</h2>`);
 });

//custom middleware

function logger(req, res, next) {
  req.TimeStamp=(new Date().toISOString());
  console.log(`${req.method} request to ${req.originalUrl} made at ${req.TimeStamp} `)
  next();
}
module.exports = server;
