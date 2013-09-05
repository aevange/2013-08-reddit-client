angular.module('myApp', ['ngRoute', 'myApp.controllers', 'myApp.services'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    controller : 'mainController',
    templateUrl: 'templates/login.html'
  })
  .when('/home', {
    controller : 'mainController',
    templateUrl: 'templates/home.html'
  });
  //otherwise:
  // Setup our routes here
}]);

//What is the home/login routes
//can we store directives in template