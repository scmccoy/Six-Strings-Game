(function(ng) {
	"use strict";

	ng.module('sixStringApp').controller('LoginController', function($scope, $q, $state, dataService, localStorageService, $stateParams) {

		console.log('in LoginController');

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

			$q.when(dataService.post(url, $scope.inputInfo))
			.then((response) => {
				$scope.currUser = response.data.data;
				localStorageService.set( 'login', $scope.currUser );
				localStorageService.set( 'gameswon', $scope.currUser.games_won );
				$state.go( 'gameParent.game' );

			}).catch((error) => {
				$('p.incorrect-login').text('incorrect login | try again');
				$('#loginForm').trigger('reset');
				console.log(error);
			});

};

$scope.userLogout = function() {
	$scope.currUser = {};
	localStorageService.set( 'login', $scope.currUser );
	localStorageService.set( 'gameswon', $scope.currUser );
	localStorageService.set( 'score', $scope.currUser );
};

}); //loginController

})(angular);
