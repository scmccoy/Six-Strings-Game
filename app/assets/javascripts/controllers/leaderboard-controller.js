( function( ng ) {
	"use strict";

	ng.module( 'sixStringApp' ).controller( 'LeaderboardController', function( dataService, $q, $state, $scope, localStorageService ) {
		console.log( 'in LeaderboardController' );

		$scope.loggedUser = function() {
			let loggedUser = localStorageService.get( 'login' );
			return loggedUser;
		};

		console.log( 'login: ', $scope.loggedUser() );

		$q.when( dataService.get( './img/leaderboard.json' ) ).then( ( response ) => {
				let leadData = response.data;
			console.log( 'leadData', leadData );
		} ).catch( ( error ) => {
			console.log( error );
		} );

	} );

} )( angular );
