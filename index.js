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

// Rename 'package-dist.json' in dist folder if it exists
if (views.includes('dist')) {
  const fs = require('fs');
  const oldPath = path.join(__dirname, 'package-dist.json');
  const newPath = path.join(__dirname, 'package.json');
  fs.access(oldPath, fs.F_OK, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    fs.rename(oldPath, newPath, (err) => {
      if (err) console.log('Error: ' + err);
    });
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