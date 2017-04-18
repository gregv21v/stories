// this file contains all the code relevant to
// interactions with stories on the server and db


module.exports = {

  // initializes all the routes
  // relevant to stories for the express
  // app
  // app: an express app, should have bodyParser installed
  // parser: a body parser
  init: function(app, db, parser) {
    // app post story
    app.post('/story', parser, function(req, res, next) {
      var story = req.body; // story should include user key
      db.stories.save(story, function(err, data) {
        console.log(data);
        res.end(JSON.stringify(data))
      })

      return next();
    })

    // app get all stories
    app.get('/stories', function(req, res) {
      db.stories.find(function(err, docs) {
        res.json(200, docs);
      });
    })

    // TODO: extra routes
    // app post all stories
    // app get all stories
  }
}
