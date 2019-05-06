//API ROUTING


var express = require("express");
var apirouter = express.Router();
var bodyParser = require("body-parser");
var siblings = require("../data/siblings.js");

apirouter.get("/api/siblings", function (req, res) {
    res.json(siblings);
});


apirouter.post("/data/newSib", function (req, res) {

    console.log(req.body);

    var newSibling = req.body;

    var lowestScore = 41;

    var sibIndex = 0;

    console.log(newSibling['scores[]']);

    // iterate through the the objects

    for (var i = 0; i < siblings.length; i++) {

        var sibScore = 0;

        //iterate through the scores

        for (var x = 0; x < siblings[i].scores.length; x++) {

            sibScore = Math.abs(newSibling['scores[]'][x] - siblings[i].scores[x]) + sibScore;

        }

        //compare the scores and return the lowest result
        
        if (sibScore < lowestScore) {

            lowestScore = sibScore;

            sibIndex = i;

        };

    };

    console.log(siblings[sibIndex]);


    siblings.push(newSibling);

    res.json(siblings[sibIndex]);

});




module.exports = apirouter;