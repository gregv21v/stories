
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
  "mongodb://heroku_5rwzvrlz:smartwolf25@ds145800.mlab.com:45800/heroku_5rwzvrlz",
  //process.env.MONGODB_URI,
  ["stories", "images"]
);

app.set('port', (process.env.PORT || 5000));
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(
    path.join(__dirname, "public", "index.html")
  );
})


// the root when coming from mturk
app.get('/mturk', function(req, res) {
  res.sendFile(
    path.join(__dirname, "public", "mturk.html")
  )
})


// post initial images to database
/* This is for initializing images
var initialImages = [
  { name: "apple-desk-laptop-working.jpg", id: 0 },
  { name: "city-sunny-people-street.jpg" },
  { name: "man-relax-couch-study.jpg" },
  { name: "pexels-photo-196464.jpeg" },
  { name: "pexels-photo-211050.jpeg" },
  { name: "pexels-photo-212092.jpeg" },
  { name: "pexels-photo-247811.jpeg" },
  { name: "pexels-photo-25349.jpg" },
  { name: "pexels-photo-40120.jpeg" },
  { name: "pexels-photo-70292.jpeg" },
  { name: "pexels-photo-78225.jpeg" },
  { name: "pexels-photo-89873.jpeg" },
  { name: "pexels-photo.jpg" }
]

for(var i = 0; i < initialImages.length; i++) {
  var img = initialImages[i];
  img.id = i;
  db.images.insert(img);
}
*/




// app post story
app.post('/story', jsonParser, function(req, res, next) {
  var story = req.body;
  db.stories.save(story, function(err, data) {
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

// get the entire list of images
// or maybe just a few depending
app.get('/images', function(req, res) {
  db.images.find(function (err, docs) {
    res.json(200, docs);
  })
})


// app post all stories
// app get all stories

app.listen(app.get('port'), function() {
  console.log("Example app on port " + app.get('port') + "!");
})
