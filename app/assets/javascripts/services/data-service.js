// (function(ng) {
// 	"use strict";
//
// 	ng.module('sixStringApp').service('dataService', function($http) {
//
//
// 		/////////////////////////////////////
// 		// API :: GET  // FOR TESTING ALL GET RESPONSES
// 		/////////////////////////////////////
// 		function getChecker() {
// 			const p1 = $.get(`https://##`);
// 			// const p2 = $.get(`https://##`);
// 			// const p3 = $.get(`https://##`);
// 			Promise.all([p1]).then((results) => {
// 				console.log(results);
// 			}).catch((error) => {
// 				console.log(error);
// 			});
// 		} // END GET CHECKER
//
// 		/////////////////////////////////////
// 		// API :: POST INPUT
// 		/////////////////////////////////////
//
//
// 		/////////////////////////////////////
// 		// API :: GET : WORDS
// 		/////////////////////////////////////
// 		function getWords(url) {
//
// 			return $http({
// 				method: 'GET',
// 				url: url
// 			});
// 		}
// 		return {
// 			get: getWords
// 		};
// 		// END START GAME CALL
// 	});
// })(angular);
