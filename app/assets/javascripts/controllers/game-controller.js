(function(ng) {
	"use strict";

	ng.module('sixStringApp').controller('GameController', function(dataService, $q, $state, $scope) {
		console.log('in GameController');

		$q.when(DataService.get('./puzzles')).then((response) => {
			this.getPuzzle = response;
			console.log(this.getPuzzle);
		}).catch((error) => {
			console.log(error);
		});

	});

})(angular);
