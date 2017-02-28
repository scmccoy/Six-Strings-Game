(function(ng) {
	"use strict";

	ng.module('sixStringApp').service('StorageService', function(localStorageService) {

		// let key = null;
		// let value = null;

		function setItems(key, value) {
			localStorageService.set(key, value);
		}

		function getItems(value) {
			localStorageService.get(key);
		}

		return {
			set: setItems,
			get: getItems
		};

	});

})(angular);

// access LocalStorageModule from here ^^  (is in app.js module array)
