// sets up server requirements
var express = require('express'),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose');

var postcss = require('postcss'),
      syntax = require ('postcss-scss'),
      stripInlineComments = require ('postcss-strip-inline-comments'),
      fs = require('fs');


//require database
var db = require('./DB/db.js');

//creates server
var app = express();

//creates default port
var port = process.env.PORT || 4444;

var css = fs.readFileSync('./app/assets/Styles/styles.css', 'utf8');

postcss([stripInlineComments]).process(css, { parser: syntax }).then( result => {
    console.log('hello');
});
//middleware
app.use(express.static(__dirname + '/app/'));
app.use(bodyParser.json());

//mongoose connection
mongoose.connect('mongodb://IndigoZone:telegraph5@ds019481.mlab.com:19481/heroku_vj69wpp5'); 

//connects app and port
app.listen(port);

// app.get('/', function(req, res){
//   res.render('index')
// })

//handles register
app.post('/api/register', function(req,res){
  db.create({
    username: req.body.username,
    password: req.body.password
  }, function(err, user){
    res.send(user);
  });

});

//handles login
app.post('/api/login', function(req,res){
  db.findOne({username:req.body.username}, function(err, user){
    if (err){
      res.send(err);
    } else if(user){
      if(req.body.password === user.password){
        res.send('success');
      }
    } else {
      res.send('failure');
    }
  });

});

//wild card
app.get('*/', function(req,res){
  res.redirect('/')
})

//prints sucess when the server is running 
console.log('Server now listening on port: ', port);

//exports the app server
module.exports = app;