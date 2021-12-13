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

http.createServer(function (req, res) {
  console.log("Server created");
  
  app.listen(port);
  console.log("Listening");
  
  fs.readFile('./scheduleView.html', function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    } 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("INSIDE");
    return res.end();
  });
}).listen(port);



