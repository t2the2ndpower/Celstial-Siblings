//HTML ROUTING

var express = require("express");
var path = require("path");
var htmlrouter = express.Router(); 

htmlrouter.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

htmlrouter.get("/survey", function(req, res){
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});


module.exports = htmlrouter;