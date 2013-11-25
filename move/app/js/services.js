'use strict';

/* Services */

var franckeServices = angular.module('franckeServices', ['ngResource']);

franckeServices.factory('Phone', ['$resource',
  function($resource){
    return $resource('phones/:phoneId.json', {}, {
      query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
    });
  }]);
