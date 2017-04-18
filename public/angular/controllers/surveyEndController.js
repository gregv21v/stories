var mod = angular.module("stories.controllers")

mod.controller("SurveyEndCtrl", function($scope, $location) {
  $scope.code = $location.search()["code"];
})
