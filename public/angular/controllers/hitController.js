var mod = angular.module("stories.controllers")

mod.controller("HitCtrl",
  ['$scope', '$http', '$location', 'UserData',
    function($scope, $http, $location, /*$cookies,*/ UserData) {


  // create an a account using
  var login = {
    username: "username",
    password: "password"
  }

  UserData.createUser(login).then(function(key) {
    $scope.key = key;
  })

  $scope.keyCode = 0

  $scope.inputEnabled = false
  $scope.buttonText = "Please accept this HIT to continue."

  // get the url paramerters
  var params = $location.search()
  var assignId = params["assignmentId"]
  var submitTo = params["turkSubmitTo"]

  if(assignId != "") {
    if(assignId == "ASSIGNMENT_ID_NOT_AVAILABLE") {
      $scope.inputEnabled = false
      $scope.buttonText = "Please accept this HIT to continue."
    }
  }

  // on load
  $scope.submit = function() {
    $http({
      method: "JSONP",
      url: submitTo + "mturk/externalSubmit?assignmentId=" + params["assignmentId"]
    })
  }



}])
