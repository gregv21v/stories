var mod = angular.module("stories.services")


mod.factory("ImageData", function($http) {
  //var baseURL = "http://localhost:5000/"

  // Here for testing purposes
  var images = [
    { name: "apple-desk-laptop-working.jpg"},
    { name: "city-sunny-people-street.jpg"},
    { name: "man-relax-couch-study.jpg"},
    { name: "pexels-photo-196464.jpeg"},
    { name: "pexels-photo-211050.jpeg"},
    { name: "pexels-photo-212092.jpeg"},
    { name: "pexels-photo-247811.jpeg"},
    { name: "pexels-photo-25349.jpg"},
    { name: "pexels-photo-40120.jpeg"},
    { name: "pexels-photo-70292.jpeg"},
    { name: "pexels-photo-78225.jpeg"},
    { name: "pexels-photo-89873.jpeg"},
    { name: "pexels-photo.jpg"}
  ]

  return {
    /*
      Get all the image names from the database
    */
    getImages: function() {

      //var temp = {};

      /*
      $http.get("/images")
        .then(function (data) {
            temp = data;
        }, function(msg) {
            console.log("An error has occured.");
        })
      */
      return images;

    },


  }
})
