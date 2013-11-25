'use strict';

/* App Module */

var franckeApp = angular.module('franckeApp', [
  'ngRoute',
  /* 'franckeAnimations',*/
  'franckeControllers',
  'franckeFilters',
  'franckeServices'
]);






franckeApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'partials/home.html',
        controller: 'HomeCtrl'
      }).


      when('/phones', {
        templateUrl: 'partials/phone-list.html',
        controller: 'PhoneListCtrl'
      }).
      when('/phones/:phoneId', {
        templateUrl: 'partials/phone-detail.html',
        controller: 'PhoneDetailCtrl'
      }).
      otherwise({
        redirectTo: '/phones'
      });
  }]);
