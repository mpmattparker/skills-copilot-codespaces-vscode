// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const comments = require('./comments');

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

// Return all comments
app.get('/comments', (req, res) => {
  res.send(comments);
});

// Add a new comment
app.post('/comments', (req, res) => {
  const { username, body } = req.body;
  const newComment = { username, body };
  comments.push(newComment);

  res.send(newComment);
});

app.listen(process.env.PORT || 8081);