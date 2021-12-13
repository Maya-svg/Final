var http = require('http');
var fs = require('fs');
var qs = require('querystring');

const express = require('express');
const app = express();
app.use(express.static("public"));
const bodyParser = require('body-parser');
app.set('view engine','ejs');

const MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://Harnaljia:Harnaljia@band.huo1y.mongodb.net/Band?retryWrites=true&w=majority";
var port = process.env.PORT || 3000;

app.use('/', function(req, res){
    res.render('index');
});

app.get('/',function(req,res){
	res.send("Hi");
});

app.listen(port, 
	() => console.log("Server is running..."));
