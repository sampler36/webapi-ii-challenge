const express = require('express');

const postsRouter = require('./posts/postsRouter');

const server = express();

server.use(express.json());

server.use('/api/posts', postsRouter); 

server.get('/', (req, res) => {
    res.send(`
      <h2> Post API</h>
      <p>Welcome to the API</p>
    `);
  });

module.exports = server