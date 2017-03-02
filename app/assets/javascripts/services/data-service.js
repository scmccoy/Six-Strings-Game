(function(ng) {
	"use strict";

	ng.module('sixStringApp').service('dataService', function($http) {
		// function AllDataService($http) {
		function getData(url) {
			return $http({
				method: 'GET',
				url: url
			});
		}

		function postData(url) {
			return $http({
				method: 'POST',
				url: url,
				headers: {
					"content-type": "application/json;charset=utf-8"
				}
				// data: JSON.stringify({
				//
				// })
			});
		}

		function putData(url) {
			return $http({
				method: 'PUT',
				url: url
			});
		}

		function deleteData(url) {
			return $http({
				method: 'DELETE',
				url: url,
				headers: {
					"content-type": "application/json;charset=utf-8"
				}
			});
		}

		return {
			get: getData,
			post: postData,
			put: putData,
			delete: deleteData
		};
		// }
	});
})(angular);
