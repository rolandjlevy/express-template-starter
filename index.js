// Set up server with express.js
const express = require('express');
const app = express();
const env = require('dotenv');
const port = process.env.PORT || 3000;

// Set up ejs templates
const ejs = require('ejs');
app.set('view engine', 'ejs');
app.use(express.static('public'));

// For body parsing in POST routes
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// middleware to capture current url
app.use((req, res, next) => {
  res.locals.uri = req.originalUrl;
  next();
});

// Set up routes
app.get('/', function(req, res) {
  res.render('pages/index', { title: 'Home', uri: res.locals.uri });
});

app.get('/about', function(req, res) {
  res.render('pages/about', { title: 'About', uri: res.locals.uri });
});

app.listen(port, () => {
  console.log('Listening on port', port);
});