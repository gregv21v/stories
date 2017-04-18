var app = angular.module("stories")


// this is so $location.search gets the url
// parameters without requiring #! or something
// like that.
app.config(function($locationProvider) {
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  })
})


app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: "templates/survey.html",
      controller: "SurveyCtrl"
    })
    .when('/end', {
      templateUrl: "templates/survey_end.html",
      controller: "SurveyEndCtrl"
    })
})
