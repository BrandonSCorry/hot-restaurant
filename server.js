// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//vars / arrays / data
// =============================================================

var tablesArr = [];

var waitlistArr = [];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

//display tables data
app.get('/api/tables', function (req, res) {
  return res.json(tablesArr);
});

//
app.get('/api/waitlist', function (req, res) {
  return res.json(waitlistArr);
});

//post to tablesArr
app.post('/api/tables', function (req, res) {
  var getInput = req.body;

  console.log(getInput);

  if (tablesArr.length < 2) {
    tablesArr.push(getInput);
  } else {waitlistArr.push(getInput);}



  res.json(getInput);
});


//server listener
app.listen(PORT, function () {
  console.log('App listening on PORT ' + PORT);
});