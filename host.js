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
  
  app.listen(port,function(){
    console.log('Listening');
  });
  
  MongoClient.connect(url, { useUnifiedTopology: true }, function(err, db){
    if(err) { return console.log(err); return;}
    
    var dbo = db.db("Info");
    var collection = dbo.collection('schedule');

    console.log("connected to Mongo");

    app.get('/',function(req,res){
        console.log("In get request");
        populate(collection,res);
        res.write ("inside get function");
    }); 
   });
  
   res.write ("Success!  This app is deployed online");
   res.end();
}).listen(port);



