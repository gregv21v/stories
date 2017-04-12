var mod = angular.module("stories.controllers", [])


mod.controller("Ctrl", function($scope, StoryData) {
  $scope.story = {}
  $scope.photos = [
    { name: "apple-desk-laptop-working.jpg" },
    { name: "city-sunny-people-street.jpg" },
    //{ name: "man-relax-couch-study.jpg" },
    //{ name: "pexels-photo-196464.jpeg" },
    //{ name: "pexels-photo-211050.jpeg" },
    //{ name: "pexels-photo-212092.jpeg" },
    //{ name: "pexels-photo-247811.jpeg" },
    //{ name: "pexels-photo-25349.jpg" },
    //{ name: "pexels-photo-40120.jpeg" },
    //{ name: "pexels-photo-70292.jpeg" },
    //{ name: "pexels-photo-78225.jpeg" },
    //{ name: "pexels-photo-89873.jpeg" },
    { name: "pexels-photo.jpg" }
  ]

  $scope.submit = function() {

    console.log($scope.story.text);

    StoryData.postStory({
      authorId: "12345", // this could be the worker id
      text: $scope.story.text
    })


  }


})
