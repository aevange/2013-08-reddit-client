var app = angular.module('myApp.controllers', []);
app.controller('mainController', ['$scope', '$http', function($scope, $http) {
  $http({
    method: 'JSONP',
    url: 'http://www.reddit.com/r/funny.json?jsonp=JSON_CALLBACK'})
    .success(function(response) {
      $scope.redditData = response.data.children;
    }).error(function(err) {
      throw new Error(err, '</3');
    });
}]);