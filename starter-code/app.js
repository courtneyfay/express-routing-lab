//Did you use npm install to
//add all these packages
//to our project? YAS
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// How do we 'require' the candyRouter file? YAS
var candyRouter = require('./candyRouter.js');

app.use(bodyParser.json());

//How do we redirect the /candies path
//through our candyRouter?
//Hint: you need app.use
app.use('/candies', candyRouter);

app.listen(3000);