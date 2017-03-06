// ['ui.router', 'templates']
(function(ng) {
	"use strict";

	ng.module('sixStringApp', ['ui.router', 'templates', 'LocalStorageModule']);

	ng.module('sixStringApp').config(function($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/');

		$stateProvider.state('gameParent', {
			url: '/',
			abstract: true,
			template: '<ui-view></ui-view>'
		}).state('gameParent.index', {
			url: '',
			controller: 'LoginController as logCtrl',
			templateUrl: 'home.html'
		}).state('gameParent.login', {
			url: 'login',
			controller: 'LoginController as logCtrl',
			templateUrl: 'login.html'
		}).state('gameParent.newuser', {
			url: 'newuser',
			controller: 'LoginController as logCtrl',
			templateUrl: 'newuser.html'
		}).state('gameParent.start', {
			url: 'start',
			controller: 'LoginController as logCtrl',
			templateUrl: 'start.html'
		}).state('gameParent.game', {
			url: 'game',
			controller: 'GameController as gameCtrl',
			templateUrl: 'game.html'
		}).state('gameParent.leaderboard', {
			url: 'leaderboard',
			controller: 'LeaderboardController as ldbd',
			templateUrl: 'leaderboard.html'
		}).state('gameParent.win', {
			url: 'win',
			controller: 'WinController as winCtrl',
			templateUrl: 'win.html'
		});
	});

})(angular);
