(function(ng) {
	"use strict";

	ng.module('sixStringApp').controller('LoginController', function($scope, $q, $state, dataService) {
		console.log('in LoginController');

		$scope.userInput = []; // user login credentials Array
		$scope.inputInfo = { //
			username: '',
			password: ''
		};
		$scope.userSubmit = function() {
			$scope.userInput.push($scope.inputInfo);
			console.log('userInput --> ', $scope.userInput);
		};

	}); // USER LOGIN FUNCTION

	// $q.when(DataService.get('./puzzles')).then((response) => {
	// 	this.getPuzzle = response;
	// 	console.log(this.getPuzzle);
	// }).catch((error) => {
	// 	console.log(error);
	// });


})(angular);
