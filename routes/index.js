const express = require("express"); // npm i express | yarn add express
const app = express();

/* GET home page. */
app.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = app;
