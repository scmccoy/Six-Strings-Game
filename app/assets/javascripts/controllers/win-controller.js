(function(ng) {
	"use strict";

	ng.module('sixStringApp').controller('WinController', function($q, $scope, $state, dataService, localStorageService) {
		console.log('in WinController');

		$scope.storUser = localStorageService.get('login');
		console.log('storeUser', $scope.storUser);

		$scope.scorUser = localStorageService.get('score');
		$scope.totalGamesWon = localStorageService.get('gameswon');

	});

})(angular);
