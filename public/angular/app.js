var app = angular.module("stories", [
  "ngRoute",
  "stories.controllers",
  "stories.services"
])

// this is so $location.search gets the url
// parameters without requiring #! or something
// like that.
app.config(function($locationProvider) {
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  })
})
