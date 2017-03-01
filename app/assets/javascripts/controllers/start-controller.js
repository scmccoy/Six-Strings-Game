(function(ng) {
	"use strict";

	ng.module('sixStringApp').controller('StartController', function($q, $state, dataService) {
		console.log('in StartController');
		const test = document.getElementById('btn__new-game');

		test.addEventListener('click', function() {
			console.log('in click');

			$q.when(dataService.get('./puzzles')).then((response) => {
				this.getPuzzle = response;
				console.log(this.getPuzzle);
			}).catch((error) => {
				console.log(error);
			});
		});


	});

})(angular);
