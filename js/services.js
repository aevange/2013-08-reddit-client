angular.module('myApp.services', [])
.factory('rd', ['$http', function($http){
  return { fetch: function() {
    return $http({
    method: 'JSONP',
    url: 'http://www.reddit.com/r/funny.json?jsonp=JSON_CALLBACK'});
   }
  };
}]);