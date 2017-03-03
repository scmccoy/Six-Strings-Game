(function(ng) {
	"use strict";

	ng.module('sixStringApp').controller('LoginController', function($scope, $q, $state, dataService, localStorageService) {

		console.log('in LoginController');
		// $scope.userInput = [];
		$scope.inputInfo = {
			username: '',
			email: '',
			password: '',
			pickone: 'pick one'
		};

		$scope.userSubmit = function(user) {

			let url = '';
			console.log('user', user);
			// $scope.userInput.push($scope.inputInfo);
			if (user === 'new') {
				url = 'http://localhost:3000/users/sign_in';
			} else {
				url = 'http://localhost:3000/users/';
			}

			localStorageService.set( 'login', $scope.inputInfo );

			$q.when(dataService.post(url)).then((response) => {
				console.log('response: ', response);
			}).catch((error) => {
				console.log(error);
			});

		$state.go( 'gameParent.gameCtrl' );
};

}); //loginController

})(angular);
