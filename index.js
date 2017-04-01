
/*
  TODO: make rest calls for collecting and sending data
    to and from the angular interface

  RestCalls
    getStory
    postStory

    getAllStories
    postStories

  Rest & Express using Request
  https://smarttechie.org/2015/10/19/how-to-make-rest-api-call-from-express-application/

*/

const express = require('express');
const path = require('path');
var app = express();



app.set('port', (process.env.PORT || 5000));
app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(
    path.join(__dirname, "public", "index.html")
  );
})





app.listen(app.get('port'), function() {
  console.log("Example app on port 3000!");
})
