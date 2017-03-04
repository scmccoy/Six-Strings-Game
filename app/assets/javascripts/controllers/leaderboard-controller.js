( function( ng ) {
	"use strict";

	ng.module( 'sixStringApp' ).controller( 'LeaderboardController', function( dataService, $q, $state, $scope, localStorageService ) {
		console.log( 'in LeaderboardController' );

		$scope.getLeaders = function() {
			$q.when( dataService.get( 'scores' ) ).then( ( response ) => {
				$scope.leadData = response.data;
			} ).catch( ( error ) => {
				console.log( error );
			} );

		};


	} );

} )( angular );
