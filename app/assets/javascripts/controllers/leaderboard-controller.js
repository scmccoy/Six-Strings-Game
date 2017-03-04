( function( ng ) {
	"use strict";

	ng.module( 'sixStringApp' ).controller( 'LeaderboardController', function( dataService, $q, $state, $scope, localStorageService ) {
		console.log( 'in LeaderboardController' );

			$q.when( dataService.get( 'scores' ) ).then( ( response ) => {
				$scope.leadData = response.data;
				console.log('responsedata', $scope.leadData);
			} ).catch( ( error ) => {
				console.log( error );
			} );


	} );

} )( angular );
