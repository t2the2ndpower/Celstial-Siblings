// EXPRESS SERVER w Route file references

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 8080;

var apiRoutes = require("./app/routing/apiRoutes.js");
var htmlRoutes = require("./app/routing/htmlRoutes.js");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(apiRoutes);
app.use(htmlRoutes);


app.listen(PORT, () => {
    console.log("Server Startted and listening on port" + PORT);
});

