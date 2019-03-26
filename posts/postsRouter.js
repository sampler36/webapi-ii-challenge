const express = require('express');

const postsRouter = express.Router();

postsRouter.use(express.json())

const db = require('../data/db')

postsRouter.get('/', (req, res) => {
  db.find('posts')
    .then(posts => {
      res.status(200).json(posts)
    })
    .catch(() => {
      res
        .status(500)
        .json({ error: 'The posts information could not be retrieved.' })
    })
})



module.exports = postsRouter