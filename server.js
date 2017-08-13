var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articlesDatabase={
  'article-one':{
    title :'Article-One | Nandu',
    heading :'Articel-One | Nandu',
    date  :'August 13 2017',
    content : `Stupid this is from the Article -One
              try other one`,
    num :'1'
  },
  'article-two':{
    title :'Article-Two | Nandu',
    heading :'Articel-Two | Nandu',
    date  :'August 14 2017',
    content : `Stupid this is from the Article -Two
              try other one`,
    num :'2'
  },
  'article-three':{
    title :'Article-Three | Nandu',
    heading :'Articel-Three | Nandu',
    date  :'August 15 2017',
    content : `Stupid this is from the Article -Three
              try other one`,
    num :'3'
  }
};
var createTemplate = function(data){
  var title= data.title;
  var heading=data.heading;
  var date= data.date;
  var content= data.content;
  var num=data.num;
  var htmlBody= `
  <html>              
    <head>
        <title>${title} </title>
        <link rel="stylesheet" href="/ui/style.css">
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    </head>
    <body class="container">
      <center>
        <h2>
            THIS IS FROM THE ${heading} STUPID
        </h2>
        <h5>${date}</h5>
        <p>${content}</p>
        <h1>${num}</h1>
        <span>
          <button><a href="/">Home</a></button>
          <button><a href="/article-one">1</a></button>
          <button><a href="/article-two">2</a></button>
          <button><a href="/article-three">3</a></button>
        </span>
    
      </center>
    </body>
</html>`;
  return htmlBody;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
/**
 * var articelone= {
    title :'Article-One | Nandu',
    heading :'Articel-One | Nandu',
    date  :'August 13 2017',
    content : `Stupid this is from the Article -One
              try other one`
};

 *app.get('/article-one', function (req, res) {
   res.send(createTemplate(articelone));
  });
 
 */
app.get('/:articleNameFromUrl',function(req,res){
  //here we are using the : for retriving the succeeding text into variable from express framework
  var articleNameRetrieved= req.params.articleNameFromUrl;
  res.send(createTemplate(articlesDatabase[articleNameRetrieved]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
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
