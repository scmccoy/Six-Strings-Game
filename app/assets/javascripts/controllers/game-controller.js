(function(ng) {
	"use strict";

	ng.module('sixStringApp').controller('GameController', function(dataService, $q, $state, $scope) {
		console.log('in GameController');

		$q.when(dataService.get('http://localhost:3000/puzzles/random')).then((response) => {
			// this.getPuzzle = response.data;
			$scope.currentObj = response.data;
			// console.log('Get Response --| ', $scope.currentObj);
			wordTheDestructor($scope.currentObj);
			$scope.randomArray();
			clearInterval(startSI); // clear the setInterval
			startTimer(0); // set setInterval timer to 0
		}).catch((error) => {
			console.log(error);
		});
		///////////////////////////////////////
		//** FUNCTION DATE
		///////////////////////////////////////


		let bestTimes = []; // array for times
		let startSI = null; // setInterval
		$scope.startTimestamp = null;
		// time is set to 0
		function startTimer(myStartTimestamp) {
			$scope.startTimestamp = parseInt(myStartTimestamp);

			startSI = setInterval(function() {
				console.log('timer --> ', $scope.startTimestamp);
				$scope.startTimestamp++;
				//	bestTimes.push(startTimestamp); // push
				// console.log(bestTimes);
				// console.log(startTimestamp);
				$('.timer').html($scope.startTimestamp);
			}, 1000);
		}
		// for timer
		function pad(num) {
			return ("0" + num).slice(-2);
		}
		// for timer
		function hhmmss(secs) {
			let minutes = Math.floor(secs / 60);
			secs = secs % 60;
			let hours = Math.floor(minutes / 60);
			minutes = minutes % 60;
			// console.log('min conv ', pad(minutes));
			return pad(minutes) + ":" + pad(secs);
		}


		///////////////////////////////////////
		//** FUNCTIONS FOR Tile Pick
		///////////////////////////////////////
		// $scope.correctChoicesArr = []; //

		$scope.incorrectLength = []; // tracker array for incorrect guesses by FOR LOOP OBJ only!

		$scope.checkGuess = function() { // CHECK GUESS FUNCTION
			$scope.myGuess = $('.user-guess').text();
			for (let property in $scope.currentObj) { // loop through obj
				if ($scope.currentObj.hasOwnProperty(property)) { //checkin if on obj key
					if (property.toLowerCase() === $scope.myGuess.toLowerCase()) { //did guess match a key?
						// console.log('prop to LC --> ', property.toLowerCase());
						// console.log('myGuess to LC --> ', $scope.myGuess.toLowerCase());
						$(`tr:contains(${property})`).addClass('correct'); // interpolation // add correct class
						// can contain word here?
						$('.is-hidden').addClass('tile-correct'); // add hide class to Correct Guess Tiles
						$('.tile-correct').removeClass('is-hidden'); // remove temp is hidden tile class from all tiles
						$scope.clearGuess(); // clear guesses
						console.log('CORRRECT');
						$scope.incorrectLength.length = 0; //reset array
						// console.log('incorrectLength after clearing --> ', $scope.incorrectLength);
						///////////////////////////////////


						///////////////////////////////////
					} else {
						$scope.incorrectLength.push('Remove@6');
						console.log('INCORRECT');
					}
					if ($scope.incorrectLength.length === 6) {
						// console.log('you are in INCORRECT IF ELSE FOR 6 INCORRECTS');
						// console.log('incorrectLength before class and clearing --> ', $scope.incorrectLength, $scope.incorrectLength.length);
						$('.shaneRules').removeClass('is-hidden'); // remove temp hidden class from all tiles
						$scope.incorrectLength.length = 0; //reset array
						// console.log('incorrectLength after clearing --> ', $scope.incorrectLength);
					} else {
						$scope.clearGuess(); // clear guesses
					}
				}
			}
			$scope.incorrectLength.length = 0; //reset array
		};

		$('.tile-wrapper').on('click', '.shaneRules', function() { // tile on click function
			$scope.wordLength = $('.user-guess').html().length; // check length of guesses
			if ($scope.wordLength > 9) {
				$scope.clearGuess(); // clear form
				$('.shaneRules').removeClass('is-hidden'); // remove is hidden class from all tiles
			} else {
				$(this).addClass("is-hidden"); // hide this tile picked
			}
		});

		$scope.tilePick = function(myPick) {
			// console.log('myPick --> ', myPick);
			$('.user-guess').append(myPick);
		};

		$scope.clearButton = function() {
			$('.user-guess').html('');
			$('.shaneRules').removeClass('is-hidden');
		};

		$scope.clearGuess = function() {
			$('.user-guess').html('');
		};

		///////////////////////////////////////
		//** FUNCTIONS FOR SEPERATING KEYS / VALUES
		///////////////////////////////////////

		let mixedParts = []; // to be this.currentWords
		let mixedClues = []; // to be this.currentClues
		//let wordClue = this.getPuzzle; //**** UPDATE TO CORRECT KEY OBJ
		let wordClue = $scope.currentObj;
		$scope.currentWords = mixedParts;
		$scope.currentClues = mixedClues;

		$scope.randomArray = function() { // randomize the word sections for tiles
			mixedParts.sort(function(a, b) {
				// console.log(mixedParts);
				return 0.5 - Math.random();
			});
		};

		function wordTheDestructor(wordClue) {
			// console.log('debug keys ', wordClue);
			Object.keys(wordClue).forEach(function(i) {
				// if ((i % 2) == 1) {}
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
					console.log('Error in wordBreaker');
				}
				mixedClues.push(wordClue[i]);
				// console.log('key ', i);
				// console.log('value', wordClue[i]);
			});
		}

		///////////////////////////////////////
		//** RANDOM FOR TRUE/FALSE
		///////////////////////////////////////
		//** 50% chance of true / false
		function randomTruth() {
			if (Math.random() > 0.5) {
				return true;
			} else {
				return false;
			}
		}

		//** Five letter word
		function wordCountFive(fiveLetterWord) {
			// console.log('wordcount 5 Arg ', fiveLetterWord);
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
			// console.log('wordcount 6 Arg ', sixLetterWord);
			mixedParts.push(sixLetterWord.slice(0, 2));
			mixedParts.push(sixLetterWord.slice(2, 4));
			mixedParts.push(sixLetterWord.slice(4, 6));
		}

		//** Seven letter word
		function wordCountSeven(sevenLetterWord) {
			// console.log('wordcount 7 Arg ', sevenLetterWord);
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
			// console.log('wordcount 8 Arg ', eightLetterWord);
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
			// console.log('wordcount 9 Arg ', nineLetterWord);
			mixedParts.push(nineLetterWord.slice(0, 3));
			mixedParts.push(nineLetterWord.slice(3, 6));
			mixedParts.push(nineLetterWord.slice(6, 9));
		}

		// console.log('mixedparts ', mixedParts);
		// console.log('mixedClues ', mixedClues);
	}); // END OF CONTROLLER
})(angular); // END OF IIFE
