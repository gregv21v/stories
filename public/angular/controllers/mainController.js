var mod = angular.module("stories.controllers")


mod.controller("Ctrl",
  ['$scope', '$location', 'ImageData', 'StoryData', 'UserData',
      function($scope, $location, ImageData, StoryData, UserData) {

  // initialize some variables
  $scope.story = {} // modal to get the text from
  console.log($location.search());
  $scope.userKey = $location.search();
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
      userKey: $scope.userKey, // this could be the worker id
      photoId: $scope.selectedIndex,
      text: $scope.story.text
    })

    $scope.story.text = "";
    $scope.storiesCompleted += 1;

    if($scope.storiesCompleted == $scope.images.length) {
      $scope.allComplete = true;
    }
  }

  // Completes the survey, and gives the user a code if they
  // came from mechanical turk.
  $scope.finish = function() {
    $scope.submit(); // submit the story that has already
                     // been written
    var params = $location.search();

    if(params["fromTurk"] == "true") {
      // display code

    } else {
      //
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

}])
