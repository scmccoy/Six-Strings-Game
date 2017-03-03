(function(ng) {
	"use strict";

	ng.module('sixStringApp').service('StorageService', function(localStorageService) {

		// let key = null;
		// let value = null;

		function set(key, value) {
			localStorageService.set(key, value);
		}

		function get(value) {
			localStorageService.get(key) || [];
		}

		return {
			set: set,
			get: get
		};

	});

})(angular);
