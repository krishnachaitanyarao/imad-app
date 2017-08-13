var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/css/materialize.min.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/css', 'materialize.min.css'));
});
app.get('/ui/css/custom.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/css', 'custom.css'));
});
app.get('/ui/css/font-awesome.min.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/css', 'font-awesome.min.css'));
});
app.get('/ui/js/jquery-3.2.0.min.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/js', 'jquery-3.2.0.min.js'));
});
app.get('/ui/js/materialize.min.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/js', 'materialize.min.js'));
});
app.get('/ui/js/custom.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/js', 'custom.js'));
});
app.get('/ui/media/bg.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/media/', 'bg.jpg'));
});
app.get('/ui/media/nanduProfileImage.jpeg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/media/', 'nanduProfileImage.jpeg'));
});
app.get('/ui/media/ofc.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/media/', 'ofc.jpg'));
});
//resolving issues
// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
