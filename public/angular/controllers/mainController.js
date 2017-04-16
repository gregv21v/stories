var mod = angular.module("stories.controllers")


mod.controller("Ctrl", function($scope, ImageData, StoryData) {

  // initialize some variables
  $scope.story = {} // modal to get the text from
  $scope.storiesCompleted = 0; // the number of stories you have
                               // written so far.
  $scope.allComplete = false; // all the stories have been written
  $scope.images = ImageData.getImages();

  console.log($scope.images);

  // initialize the fields for the images locally.
  for(var i = 0; i < $scope.images.length; i++) {
    $scope.images[i].done = false;
    $scope.images[i].text = "";
  }

  $scope.selectedIndex = 0;
  $scope.selected = $scope.images[$scope.selectedIndex];
  $scope.visible = !$scope.images[$scope.selectedIndex].done;


  // adds the new story to the database
  $scope.submit = function() {
    $scope.images[$scope.selectedIndex].done = true;
    $scope.visible = false;


    StoryData.postStory({
      authorId: "12345", // this could be the worker id
      photoId: $scope.selectedIndex,
      text: $scope.story.text
    })

    $scope.story.text = "";
    $scope.storiesCompleted += 1;

    if($scope.storiesCompleted == $scope.images.length) {
      $scope.allComplete = true;
    }


  }

  // changes the selected photo to the next photo in the list
  // of images
  $scope.next = function() {
    $scope.selectedIndex = ($scope.selectedIndex + 1) % $scope.images.length;
    $scope.selected = $scope.images[$scope.selectedIndex];
    $scope.visible = !$scope.images[$scope.selectedIndex].done;
  }

  // changes the selected photo to the previous photo in the list
  // of images
  $scope.prev = function() {
    $scope.selectedIndex -= 1;

    if($scope.selectedIndex < 0) {
      $scope.selectedIndex = $scope.images.length - 1;
    }

    $scope.selected = $scope.images[$scope.selectedIndex];
    $scope.visible = !$scope.images[$scope.selectedIndex].done;
  }

})
