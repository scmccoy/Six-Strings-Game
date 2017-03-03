(function(ng) {
	"use strict";

	ng.module('sixStringApp').controller('GameController', function(dataService, $q, $state, $scope) {
		console.log('in GameController');

		$q.when(dataService.get('http://localhost:3000/puzzles/random')).then((response) => {
			// this.getPuzzle = response.data;
			$scope.currentObj = response.data;
			// console.log('Get Response --| ', $scope.currentObj);
			wordTheDestructor($scope.currentObj);
		}).catch((error) => {
			console.log(error);
		});

		// $scope.currentObj = {
		// 	noble: 'Periodic table gas',
		// 	ousts: 'Removes from power',
		// 	others: 'Not yourself',
		// 	secular: 'Not religious',
		// 	bubbles: 'Oxygen in water',
		// 	knowledge: 'School gains'
		// };
		// console.log('currentObj ===>> ', $scope.currentObj);
		$scope.hardcodeLetters = [' LETTERS', ' LETTERS', ' LETTERS', ' LETTERS', ' LETTERS', ' LETTERS'];
		// $scope.currentWords = ["NOB", "LE", "OUS", "TS", "OT", "HE", "RS", "SE", "CUL", "AR", "BU", "BBL", "ES", "KNO", "WLE", "DGE"]; // placeholder content
		// $scope.currentClues = ["Periodic table gas", "Removes from power", "Not yourself", "Not religious", "Oxygen in water", "School gains"]; // placeholder content

		// console.log('scope cW --> ', $scope.currentWords);
		///////////////////////////////////////
		//** FUNCTIONS FOR Tile Pick
		///////////////////////////////////////
		// $scope.correctChoicesArr = []; //


		$scope.checkGuess = function() { // CHECK GUESS FUNCTION
			$scope.myGuess = $('.user-guess').text();

			for (let property in $scope.currentObj) { // loop through obj
				if ($scope.currentObj.hasOwnProperty(property)) { //checkin if on obj key
					if (property.toLowerCase() === $scope.myGuess.toLowerCase()) { //did guess match a key?
						// $scope.correctChoicesArr.push($scope.myGuess.toLowerCase()); // if add guess to array
						// console.log('correctChoicesArr --> ', $scope.correctChoicesArr);
						console.log('prop --> ', property);
						$(`tr:contains(${property})`).addClass('correct'); // interpolation // add correct class
						$scope.clearGuess();
						$('.is-hidden').addClass('tile-correct');
						$('.shaneRules').removeClass('is-hidden');
						console.log('CORRRECT');
					} else {
						$('.shaneRules').removeClass('is-hidden');
						$scope.clearGuess();
						console.log('INCORRECT');
					}
				}
			}
		};

		$('.tile-wrapper').on('click', '.shaneRules', function() { // tile on click function
			$scope.wordLength = $('.user-guess').html().length; // check length of guesses
			if ($scope.wordLength > 9) {
				$scope.clearGuess(); // clear form
				$('.shaneRules').removeClass('is-hidden'); // remove is hidden class from all tiles
			}
			$(this).addClass("is-hidden"); // hide this tile picked

			// for (let index = 0; index < 16; index++) {
			// 	if ($scope.myGuess === $scope.correctChoicesArr[index]) { // if my correct guess matches
			// 		console.log('arr in clicker ', $scope.correctChoicesArr[index]);
			// 		$(this).addClass('tile-correct'); // hide tile class - ONLY for correct guesses
			// 		$scope.correctChoicesArr = []; // empty array
			// 	} else {
			// 		console.log('else for adding tile-correct');
			// 	}
			// }
		});

		$scope.tilePick = function(myPick) {
			// console.log('myPick --> ', myPick);
			$('.user-guess').append(myPick);
		};

		$scope.clearGuess = function() {
			$('.user-guess').html('');
		};

		// if ($('.user-guess'.length > 9)) {
		// 	console.log('why, hello there!');
		// }
		///////////////////////////////////////
		//** FUNCTIONS FOR SEPERATING KEYS / VALUES
		///////////////////////////////////////
		// $scope.currentWords = [];
		// $scope.currentClues = [];
		let mixedParts = []; // to be this.currentWords
		let mixedClues = []; // to be this.currentClues
		//let wordClue = this.getPuzzle; //**** UPDATE TO CORRECT KEY OBJ
		let wordClue = $scope.currentObj;
		// console.log('wordClue --> ', wordClue);
		$scope.currentWords = mixedParts;
		$scope.currentClues = mixedClues;
		// const wordClue = {
		// 	"NOBLE": "Periodic table gas",
		// 	"OUSTS": "Removes from power",
		// 	"OTHERS": "Not yourself",
		// 	"SECULAR": "Not religious",
		// 	"BUBBLES": "Oxygen in water",
		// 	"KNOWLEDGE": "School gains"
		// };

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
