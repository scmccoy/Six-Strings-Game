(function(ng) {
	"use strict";

	ng.module('sixStringApp').controller('LoginController', function($scope, $q, $state, dataService, localStorageService, $stateParams) {

		console.log('in LoginController');
		// $scope.userInput = [];
		$scope.inputInfo = {
			username: '',
			email: '',
			password: '',
			pickone: 'pick one'
		};
		$scope.currUser = {};

		$scope.userSubmit = function(user) {
			let url = '';
			if (user === 'new') {
				url = 'users';
			} else {
				url = 'users/sign_in';
			}

			localStorageService.set( 'login', $scope.inputInfo );

			$q.when(dataService.post(url, $scope.inputInfo)).then((response) => {
				console.log(response);
				$scope.currUser = response.data.data;
				localStorageService.set( 'login', $scope.currUser );
				localStorageService.set( 'gameswon', $scope.currUser.games_won );
				console.log('curr: ', $scope.currUser);
			}).catch((error) => {
				console.log(error);
			});

		$state.go( 'gameParent.game' );
};

$scope.userLogout = function() {
	$scope.currUser = {};
	localStorageService.set( 'login', $scope.currUser );
	localStorageService.set( 'gameswon', $scope.currUser );
	localStorageService.set( 'score', $scope.currUser );
};


}); //loginController

})(angular);
