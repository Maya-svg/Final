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

app.get('/',function(req,res){
	res.send("Hi");
	res.sendFile(path.join(__dirname + '/scheduleView.html'));
});

app.listen(port, 
	() => console.log("Server is running..."));
