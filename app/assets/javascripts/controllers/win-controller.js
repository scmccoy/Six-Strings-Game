(function(ng) {
	"use strict";

	ng.module('sixStringApp').controller('WinController', function($q, $scope, $state, dataService, localStorageService) {
		console.log('in WinController');

		$scope.storUser = localStorageService.get('login');
		console.log('bst time --> ', $scope.storUser.best_time);
		$scope.scorUser = localStorageService.get('score');
		console.log('score ls --> ', $scope.scorUser);
		$scope.totalGamesWon = localStorageService.get('gameswon');
		$scope.getScoreNow = function() {
			if ($scope.storUser.best_time !== null) {
				return $scope.storUser.best_time;
			} else {
				return $scope.scorUser.score;
			}
		};
	});

})(angular);
