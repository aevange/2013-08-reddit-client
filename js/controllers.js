var app = angular.module('myApp.controllers', []);
app.controller('mainController', ['$scope', '$http', '$location', 'rd', function($scope, $http, $location, rd) {
  $scope.voteUp = function(article) {
    article.votes++;
  },

  $scope.voteDown = function(article) {
    article.votes--;
  },

  $scope.redirect = function() {
    $location.path('/home');
  },

  rd.fetch()
    .success(function(response) {
      $scope.redditData = response.data.children;
      angular.forEach($scope.redditData, function(obj) {
        obj.votes = 0;
      });
    }).error(function(err) {
      throw new Error(err, '</3');
    });
}]);
