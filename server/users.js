// this file contains all the code relevant to
// interactions with users on the server and db


module.exports = {

  // initializes all the routes
  // relevant to users for the express
  // app
  // app: an express app, should have bodyParser installed
  // parser: a body parser
  init: function(app, db, parser) {
    app.post('/createUser', parser, function(req, res) {
      var userCred = req.body; // should contain username and password
      console.log(userCred);

      // add a randomly generated key to the users credentials
      // 6-digits
      userCred.key = Math.floor((Math.random() * 1000000) + 1);

      console.log("Created user");
      console.log("Key: " + userCred);

      db.users.save(userCred, function(err, data) {
        res.send(userCred); // send the whole object otherwise it will be mistaken
                            // for an error
      })
    })
  }
}
