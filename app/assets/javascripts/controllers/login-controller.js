(function(ng) {
	"use strict";

	ng.module('sixStringApp').controller('LoginController', function($scope, $state, $q, localStorageService) {

		console.log('in LoginController');
		$scope.userInput = [];
		$scope.inputInfo = {
			username: '',
			email: '',
			password: ''
		};

		$scope.userSubmit = function() {
			// $scope.userInput.push($scope.inputInfo);
			localStorageService.set( 'login', $scope.inputInfo );
			$q.when(dataService.post('http://localhost:3000/users')).then((response) => {
				console.log('response: ', response);
			}).catch((error) => {
				console.log(error);
			});

			$state.go( 'gameParent.gameCtrl' );

		};

	}); //loginController

})(angular);
