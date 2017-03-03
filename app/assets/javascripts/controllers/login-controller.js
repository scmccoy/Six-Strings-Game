(function(ng) {
	"use strict";

	ng.module('sixStringApp').controller('LoginController', function($scope, $state, localStorageService) {

		console.log('in LoginController');
		$scope.userInput = [];
		$scope.inputInfo = {
			username: '',
			email: '',
			password: ''
		};

		$scope.userSubmit = function() {
			// $scope.userInput.push($scope.inputInfo);
			console.log('inputInfo ', $scope.inputInfo);
			localStorageService.set( 'login', $scope.inputInfo );

			$state.go( 'gameParent.gameCtrl' );

		};

	}); //loginController

})(angular);
