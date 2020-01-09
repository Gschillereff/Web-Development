var express = require('express');

var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); 

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 2772);

app.use(express.static('public'));


//Get Routes
app.get('/',function(req,res){

  res.render('about');
});

app.get('/thanks',function(req,res){

  res.render('thanks');
});

app.get('/skills',function(req,res){

  res.render('skills');
});

app.get('/contact',function(req,res){

  res.render('contact');
});



//Error messages
app.use(function(req,res){
  res.status(404);
  res.render('404');
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.type('plain/text');
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function(){
  console.log('Express started on flip3.engr.oregonstate.edu:' + app.get('port') + '; press Ctrl-C to terminate.');
});

