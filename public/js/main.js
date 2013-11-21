angular
  .module('app', [])
  .controller('UsersCtrl', ['$scope', '$http', function ($scope, $http) {
    $http.get('/users').success(function (users) {
      $scope.users = users;
    });
  }]);
