/**
*  Module
* bla
* Description
*/
var myapp=angular.module('myapp', ['ngRoute']);

myapp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/user', {
        templateUrl: 'page/welcome.html',
        controller: 'UserController'
      }).
      when('/user/:phoneId', {
        templateUrl: 'page/userDetail.html',
        controller: 'UserController'
      }).
      otherwise({
        redirectTo: '/user'
      });
  }]);