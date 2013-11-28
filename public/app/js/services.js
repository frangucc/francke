'use strict';

/* Services */

var franckeServices = angular.module('franckeServices', ['ngResource']);

franckeServices.factory('Project', ['$resource',
  function($resource){
    return $resource('projects/:projectId.json', {}, {
      query: {method:'GET', params:{projectId:'projects'}, isArray:true}
    });
  }]);

