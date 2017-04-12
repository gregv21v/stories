
/*
  TODO: make rest calls for collecting and sending data
    to and from the angular interface

  RestCalls
    getStory
    postStory

    getAllStories
    postStories

  Rest & Express using Request
  this tutorial doesn't seem to work
  https://smarttechie.org/2015/10/19/how-to-make-rest-api-call-from-express-application/

*/

// Saving Credentials:
// TODO: Make sure the password is only present on the server and not the github
//  page.
//  1) Store the password in a different file, and find some way to not store
//     it in the github repo
//  2) Create another type of database, and store it in that database.
// TODO: Create post calls to send data to the database, and get calls to
//  retrieve stories
const express = require('express');
const path = require('path');
const mongojs = require('mongojs');
const bodyParser = require('body-parser');

var app = express();
var jsonParser = bodyParser.json()
// use process.env.MONGOLAB_URI for URI on heroku server
var db = mongojs(
  process.env.MONGOLAB_URI,
  ["stories"]
);

app.set('port', (process.env.PORT || 5000));
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(
    path.join(__dirname, "public", "index.html")
  );
})


// app post story
app.post('/story', jsonParser, function(req, res, next) {
  console.log("Story added");

  var story = req.body;
  db.stories.save(story, function(err, data) {
    console.log(err);
    console.log(data);
    res.end(JSON.stringify(data))
  })

  return next();
})

// app get story
app.get('/story', function(req, res) {
  db.stories.find(function(err, docs) {
    res.json(200, docs);
  });
})


// app post all stories
// app get all stories

app.listen(app.get('port'), function() {
  console.log("Example app on port " + app.get('port') + "!");
})
