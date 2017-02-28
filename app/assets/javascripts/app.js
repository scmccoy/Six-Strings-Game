// ['ui.router', 'templates']
(function(ng) {
	"use strict";

	ng.module('sixStringApp', ['ui.router', 'templates']);
	ng.module('sixStringApp').config(function($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/'); // if url does not exist
		//..  use parent
		$urlRouterProvider.when('/', '/' + 'login');
		$stateProvider.state('gameParent', {
			url: '/', // base parent
			abstract: true, // will contain other templates inside of this state. Not a template itself
			template: '<ui-view></ui-view>' // placed the tags into the index where all the templates will appear
			// you can make multiple views by using 'names in ui-view tag '
		}).state('gameParent.loginCtrl', {
			url: 'login',
			controller: 'LoginController as logCtrl',
			templateUrl: 'login.html'
		}).state('gameParent.gameCtrl', {
			url: 'game',
			controller: 'GameController as gameCtrl',
			templateUrl: 'game.html'
		}).state('gameParent.optCtrl', {
			url: 'options',
			controller: 'OptionsController as optCtrl',
			templateUrl: 'options.html'
		});
	});

})(angular);
