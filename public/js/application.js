angular.module('application', []).
	config(function($routeProvider) {
		$routeProvider.
			when('/about', {template:'partials/about.html'}).
			when('/experiments', {template:'partials/experiments.html'}).
			othwerwise({redirectTo:'/home', template:'partials/home.html'});
	});

function UsrCtrl($scope) {

} 