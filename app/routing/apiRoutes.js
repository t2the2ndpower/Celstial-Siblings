//API ROUTING


var express = require("express");
var apirouter = express.Router(); 
var bodyParser = require("body-parser");
var siblings = require("../data/siblings.js");

apirouter.get("/api/siblings", function(req,res){
    res.json(siblings);
});


apirouter.post("/data/newSib", function(req,res){

    console.log(req.body);

    var newSibling = req.body;

    siblings.push(newSibling);


    res.json(siblings);
});




module.exports = apirouter;