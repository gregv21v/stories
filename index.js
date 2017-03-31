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
