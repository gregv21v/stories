var mod = angular.module("stories.controllers", [])


mod.controller("Ctrl", function($scope, StoryData) {
  $scope.story = {}
  $scope.photos = [
    { name: "apple-desk-laptop-working.jpg" },
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

  $scope.selectedIndex = 0;
  $scope.selected = $scope.photos[$scope.selectedIndex];


  // adds the new story to the database
  $scope.submit = function() {
    StoryData.postStory({
      authorId: "12345", // this could be the worker id
      photoId: $scope.selectedIndex,
      text: $scope.story.text
    })
  }

  // changes the selected photo to the next photo in the list
  // of photos
  $scope.next = function() {
    $scope.selectedIndex = ($scope.selectedIndex + 1) % $scope.photos.length;
    $scope.selected = $scope.photos[$scope.selectedIndex];

    //$scope.$apply();
  }

  // changes the selected photo to the previous photo in the list
  // of photos
  $scope.prev = function() {
    $scope.selectedIndex -= 1;

    if($scope.selectedIndex < 0) {
      $scope.selectedIndex = $scope.photos.length - 1;
    }

    $scope.selected = $scope.photos[$scope.selectedIndex];

    //$scope.$apply();
  }

})
