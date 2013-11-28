'use strict';

/* Controllers */

var franckeControllers = angular.module('franckeControllers', []);


franckeControllers.controller('HomeCtrl', function ($scope) {
    $scope.spice = 'Boom, this is the homepage bitch';
});
franckeControllers.controller('ResumeCtrl', function ($scope) {
   
});


franckeControllers.controller('ProjectListCtrl', ['$scope', 'Project',
  function($scope, Project) {
    $scope.projects = Project.query();
    $scope.orderProp = 'age';
  }]);

franckeControllers.controller('ProjectDetailCtrl', ['$scope', '$routeParams', 'Project',
  function($scope, $routeParams, Project) {
    $scope.project = Project.get({projectId: $routeParams.projectId}, function(project) {
      $scope.mainImageUrl = project.images[0];
    });


    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
  }]);
