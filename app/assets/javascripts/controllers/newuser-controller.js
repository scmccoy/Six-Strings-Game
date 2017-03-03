(function(ng) {
	"use strict";

	ng.module('sixStringApp').controller('NewUserController', function($scope, $q, $state, dataService, localStorageService) {

		console.log('in NewUserController');
		// $scope.userInput = [];
		$scope.newUserInputInfo = {
			username: '',
			email: '',
			password: ''
		};

		$scope.newUserSubmit = function() {
			// $scope.userInput.push($scope.inputInfo);
			localStorageService.set( 'login', $scope.newUserInputInfo );
			$q.when(dataService.post('http://localhost:3000/users/')).then((response) => {
				console.log('response: ', response);
			}).catch((error) => {
				console.log(error);
			});

		$state.go( 'gameParent.gameCtrl' );
};

}); //loginController

})(angular);
