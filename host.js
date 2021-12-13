var http = require('http');
var fs = require('fs');
var qs = require('querystring');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.set('view engine','ejs');

const MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://Harnaljia:Harnaljia@band.huo1y.mongodb.net/Band?retryWrites=true&w=majority";
var port = process.env.PORT || 3000;

console.log("This goes to the console window");
http.createServer(function (req, res) {
  
  res.writeHead(200, {'Content-Type': 'text/html'});
   res.write("<h2>Hello World</h2>");
   res.write ("Success!  This app is deployed online");
   res.end();
  
}).listen(port);



