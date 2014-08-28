;

angular.module('myApp', ["ngRoute", "googlechart"])
.config(['$routeProvider',
	function ($routeProvider) {
		$routeProvider.
		when('/base', {
			templateUrl: 'partial/base.html',
			controller: 'BaseCtrl'
		}).
		when('/settings', {
			templateUrl: 'partial/settings.html',
			controller: 'SettingsCtrl'
		}).
		otherwise({
			redirectTo: '/base'
		})
	}])
.value('googleChartApiConfig', {
		version: '1',
		optionalSettings: {
			packages: ['corechart'],
			language: 'ja'
		}
	})
.controller('MainCtrl', function ($scope, $timeout) {
	console.log("MainCtrl.start");

	// Build the date object
	$scope.date = {};

	// Update function
	var updateTime = function() {
		$scope.date.raw = new Date();
		$timeout(updateTime, 1000);
	}

	// Kick off the update function
	updateTime();
})
;
