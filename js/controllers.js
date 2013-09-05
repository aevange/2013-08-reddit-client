var app = angular.module('myApp.controllers', []);
app.controller('mainController', ['$scope', '$http', '$location', 'rd', function($scope, $http, $location, rd) {
  $scope.voteUp = function(article) {
    article.votes = article.votes || 0;
    article.votes++;
  },

  $scope.voteDown = function(article) {
    article.votes = article.votes || 0;
    article.votes--;
  },

  $scope.redirect = function() {
    $location.path('/home');
  },

  console.log('redditData');

  rd.fetch()
    .success(function(response) {
      $scope.redditData = response.data.children;
    }).error(function(err) {
      throw new Error(err, '</3');
    });


  // $http({
  //   method: 'JSONP',
  //   url: 'http://www.reddit.com/r/funny.json?jsonp=JSON_CALLBACK'})
  //   .success(function(response) {
  //     $scope.redditData = response.data.children;
  //   }).error(function(err) {
  //     throw new Error(err, '</3');
  // });
}]);
