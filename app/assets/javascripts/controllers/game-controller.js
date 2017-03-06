(function(ng) {
	"use strict";

	ng.module('sixStringApp').controller('GameController', function(dataService, $q, $state, $scope, localStorageService) {
		console.log('in GameController');
		///////////////////////////////////////
		//** Clear Intervals on load
		for (var i = 1; i < 20; i++)
			window.clearInterval(i);
		///////////////////////////////////////
		//** QUEUE--| Get Puzzle, Start Timer
		///////////////////////////////////////
		$q.when(dataService.get('puzzles/random')).then((response) => {
			$scope.currentObj = response.data;
			wordTheDestructor($scope.currentObj); // api call--| populates tiles, clues & key

			$scope.randomArray();
			startTimer(0); // set setInterval timer to 0
		}).catch((error) => {
			console.log(error);
		});
		///////////////////////////////////////
		//** FUNCTIONS--| Timer
		///////////////////////////////////////

		$scope.startTimestamp = 0;

		function startTimer(myStartTimestamp) {
			$scope.startTimestamp = parseInt(myStartTimestamp);

			$scope.startSI = setInterval(function() {
				$scope.startTimestamp++;
				$scope.bestTimes = []; // array for times --| see WinCheck function
				$scope.bestTimes.push($scope.startTimestamp);
				$('.timer').html(moment.unix($scope.startTimestamp).format('mm:ss')); // Moment JS
			}, 1000);
		}

		function pad(num) {
			return ("0" + num).slice(-2);
		}

		function hhmmss(secs) {
			let minutes = Math.floor(secs / 60);
			secs = secs % 60;
			let hours = Math.floor(minutes / 60);
			minutes = minutes % 60;
			// console.log('min conv ', pad(minutes));
			return pad(minutes) + ":" + pad(secs);
		}




		///////////////////////////////////////
		//** FUNCTION--| Check Guess
		///////////////////////////////////////

		$scope.incorrectLength = []; // tracker array for incorrect guesses by FOR LOOP OBJ only!

		$scope.checkGuess = function() {
			$scope.myGuess = $('.user-guess').text();
			for (let property in $scope.currentObj) { // loop through obj

				if ($scope.currentObj.hasOwnProperty(property)) {
					if (property.toLowerCase() === $scope.myGuess.toLowerCase()) { // check answer vs guess

						$(`tr:contains(${property})`).addClass('correct');
						$(`tr:contains(${property})`).children('.word-word')[0].innerText = property; // Adam's thing
						$('.is-hidden').addClass('tile-correct'); // add hide class to Correct Guess Tiles
						$('.tile-correct').removeClass('is-hidden'); // remove temp is hidden tile class from all tiles

						$scope.clearGuess();
						$scope.incorrectLength.length = 0; //reset array
						$scope.winCheck(); // checks /executes game win
						console.log('CORRRECT');
					} else {
						$scope.incorrectLength.push('Remove@6');
						console.log('INCORRECT');
					}
					///////////////////////////////////
					if ($scope.incorrectLength.length === 6) { // if your guess does not match w/ the 6 words ...
						$('.shaneRules').removeClass('is-hidden'); // remove temp hidden class from all tiles
						$scope.incorrectLength.length = 0;
					} else {
						$scope.clearGuess(); // clear guesses
					}
				}
			}
			$scope.incorrectLength.length = 0;
		};



		///////////////////////////////////////
		//** ADD EVENT LISTENER--| Tile Pick
		///////////////////////////////////////

		$('.tile-wrapper').on('click', '.shaneRules', function() { // tile on click function
			$scope.wordLength = $('.user-guess').html().length; // check length of guesses
			if ($scope.wordLength > 9) {
				$scope.clearGuess(); // clear form
				$('.shaneRules').removeClass('is-hidden'); // remove is-hidden class from all tiles
			} else {
				$(this).addClass("is-hidden"); // hide this tile picked
			}
		});
		///////////////////////////////////////
		//** FUNCTIONS :: OTHER
		///////////////////////////////////////
		// add tile pick to guess section
		$scope.tilePick = function(myPick) {
			$('.user-guess').append(myPick);
		};
		// clear :: x button only
		$scope.clearButton = function() {
			$('.user-guess').html('');
			$('.shaneRules').removeClass('is-hidden');
		};
		// clear :: used by all except btn
		$scope.clearGuess = function() {
			$('.user-guess').html('');
		};

		///////////////////////////////////////
		//** FUNCTION--| Execute Win on check
		///////////////////////////////////////
		$scope.winCheck = function() {
			if ($('.correct').length === 6) {
				clearInterval($scope.startSI);
				$scope.getLocalStorage = localStorageService.get('login'); // grab user ID for post
				$scope.bestScore = $scope.bestTimes.pop();
				$scope.postWinObj = { // obj to send in Post (postWin function)
					user_id: $scope.getLocalStorage.id,
					score: $scope.bestScore
				};
				$scope.bestTimes = []; // reset best time array
				$scope.trackGameWins(); // gets the total number of wins (server + this game) - sets to local storage
				$scope.postWin(); // run api post for best score
			}
		};
		///////////////////////////////////////
		//** FUNCTION--| API Post -> switch Template to WIN.html
		///////////////////////////////////////
		$scope.postWin = function() {
			$q.when(dataService.post('scores', $scope.postWinObj)).then((response) => {
				localStorageService.set('score', $scope.postWinObj); // grab user ID for post
				$scope.postWinResponse = response;

				$state.go('gameParent.win');
			}).catch((error) => {
				console.log(error);
			});
		};

		///////////////////////////////////////
		//** FUNCTION--| Games won tracker
		///////////////////////////////////////
		$scope.trackGameWins = function() {
			$scope.trackWins = localStorageService.get('gameswon');
			let totalWins = 1 + $scope.trackWins;
			localStorageService.set('gameswon', totalWins); // update games won to local storage
		};

		///////////////////////////////////////
		//** FUNCTIONS :: Using Obj for tiles / clues
		///////////////////////////////////////

		let mixedParts = []; // to be this.currentWords
		let mixedClues = []; // to be this.currentClues
		let wordClue = $scope.currentObj;
		$scope.currentWords = mixedParts;
		$scope.currentClues = mixedClues;

		$scope.randomArray = function() { // randomize the word sections for tiles
			mixedParts.sort(function(a, b) {
				return 0.5 - Math.random();
			});
		};

		$scope.randomizeClues = function() {
			return 0.5 - Math.random();
		};

		function wordTheDestructor(wordClue) {
			Object.keys(wordClue).forEach(function(i) {
				if (i.length === 5) {
					wordCountFive(i);
				} else if (i.length === 6) {
					wordCountSix(i);
				} else if (i.length === 7) {
					wordCountSeven(i);
				} else if (i.length === 8) {
					wordCountEight(i);
				} else if (i.length === 9) {
					wordCountNine(i);
				} else {
					console.log('Error in wordTheDestructor');
				}
				mixedClues.push(wordClue[i]);
			});
		}

		///////////////////////////////////////
		//** RANDOM FOR TRUE/FALSE
		///////////////////////////////////////
		//** 50% chance of true / false - for wordcount functions
		function randomTruth() {
			if (Math.random() > 0.5) {
				return true;
			} else {
				return false;
			}
		}
		//** Five letter word
		function wordCountFive(fiveLetterWord) {
			if (randomTruth()) {
				mixedParts.push(fiveLetterWord.slice(0, 3));
				mixedParts.push(fiveLetterWord.slice(3, 5));
			} else {
				mixedParts.push(fiveLetterWord.slice(0, 2));
				mixedParts.push(fiveLetterWord.slice(2, 5));
			}
		}
		//** Six letter word
		function wordCountSix(sixLetterWord) {
			mixedParts.push(sixLetterWord.slice(0, 2));
			mixedParts.push(sixLetterWord.slice(2, 4));
			mixedParts.push(sixLetterWord.slice(4, 6));
		}
		//** Seven letter word
		function wordCountSeven(sevenLetterWord) {
			if (randomTruth()) {
				mixedParts.push(sevenLetterWord.slice(0, 2));
				mixedParts.push(sevenLetterWord.slice(2, 5));
				mixedParts.push(sevenLetterWord.slice(5, 7));
			} else {
				mixedParts.push(sevenLetterWord.slice(0, 3));
				mixedParts.push(sevenLetterWord.slice(3, 5));
				mixedParts.push(sevenLetterWord.slice(5, 7));
			}
		}
		//** Eight letter word
		function wordCountEight(eightLetterWord) {
			if (randomTruth()) {
				mixedParts.push(eightLetterWord.slice(0, 3));
				mixedParts.push(eightLetterWord.slice(3, 5));
				mixedParts.push(eightLetterWord.slice(5, 8));
			} else {
				mixedParts.push(eightLetterWord.slice(0, 2));
				mixedParts.push(eightLetterWord.slice(2, 5));
				mixedParts.push(eightLetterWord.slice(5, 8));
			}
		}
		//** Nine letter word
		function wordCountNine(nineLetterWord) {
			mixedParts.push(nineLetterWord.slice(0, 3));
			mixedParts.push(nineLetterWord.slice(3, 6));
			mixedParts.push(nineLetterWord.slice(6, 9));
		}
	}); // END OF CONTROLLER
})(angular); // END OF IIFE
