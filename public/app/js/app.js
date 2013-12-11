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
      when('/resume', {
        templateUrl: 'partials/resume.html',
        controller: 'ResumeCtrl'
      }).
      when('/home', {
        templateUrl: 'partials/home.html',
        controller: 'HomeCtrl'
      }).
      when('/resume', {
        templateUrl: 'partials/resume.html',
        controller: 'PhoneListCtrl'
      }).
      when('/skrollr-test', {
        templateUrl: 'partials/skrollr-test.html',
        controller: 'PhoneListCtrl'
      }).
      when('/projects', {
        templateUrl: 'partials/project-list.html',
        controller: 'ProjectListCtrl'
      }).
      when('/projects/:projectId', {
        templateUrl: 'partials/project-detail.html',
        controller: 'ProjectDetailCtrl'
      }).

      otherwise({
        redirectTo: '/home'
      });
  }]);
