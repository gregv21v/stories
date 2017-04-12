var mod = angular.module("stories.services", [])


mod.factory("StoryData", function($http) {
  var baseURL = "http://localhost:5000/"

  return {
    /*
      Posts a story to the database
    */
    postStory: function(story) {

      console.log(story);
      var config = {
          headers : {
              'Content-Type': 'application/json'
          }
      }
      // success, error is not compatible with this version
      // of angular
      var temp = {}
      $http.post("/story", story)
        .then(function (data) {
            console.log("Nothing happened....");
            temp = data;
            console.log(data);
        }, function(msg) {
            console.log(msg);
            console.log("An error has occured.");
        })

      return temp;


    },
    /*
      Get a story from the database
      based on the author key
    */
    getStory: function(id) {
      return null;

    }

  }
})
