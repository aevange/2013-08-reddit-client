angular.module('myApp', ['ngRoute', 'myApp.controllers'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'templates/login.html'
  })
  .when('/home', {
    templateUrl: 'templates/home.html'
  });
  //otherwise:
  // Setup our routes here
}]);

//What is the home/login routes
//can we store directives in template