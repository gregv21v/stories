var mod = angular.module("stories.services")


mod.factory("StoryData", function($http) {



  return {
    /*
      Get the list of images
    */
    postStory: function(story) {
      //var deferred = $q.defer();


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
        .then(function (resp) {
            temp = resp.data;
            console.log(data);
        }, function(msg) {
            console.log(msg);
            console.log("An error has occured.");
        })

      return temp;


    }

  }
})
