var mod = angular.module("stories.services")


mod.factory('UserData', function($http, $q) {
  // the code not only identifies whether the user
  // has completed the survey, but also identifies
  // what stories the user has created.




  return {

    // Creates a user and returns a
    // key for the created user.
    // login: contains the username, and password
    createUser: function(login) {
      var deferred = $q.defer();
      var key = -1; // -1 means the key hasn't been generated properly, or something
                    // went wrong.

      $http.post('/createUser', login)
        .then(function (res) {
            deferred.resolve(res.data.key);
        }, function(msg) {
            deferred.reject(msg);
        })

      return deferred.promise;
    }
  }
})
