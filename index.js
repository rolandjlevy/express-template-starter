// Set up server with express.js
const express = require('express');
const app = express();
const path = require('path');
const env = require('dotenv');
const port = process.env.PORT || 3000;

// Set up ejs templates
const ejs = require('ejs');
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Set path for views directory
const views = path.join(__dirname, '/views');
if (views.includes('dist')) {
  const oldPath = path.join(__dirname, 'package-dist.json');
  const newPath = path.join(__dirname, 'package.json');
  const fs = require('fs');
  fs.rename(oldPath, newPath, function(err) {
      if (err) console.log('ERROR: ' + err);
  });
}
app.set('views', views);

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