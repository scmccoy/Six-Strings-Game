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

		$scope.checkGuess = function() {
			$scope.myGuess = $('.user-guess').text();
			for (var property in $scope.currentObj) {
				if ($scope.currentObj.hasOwnProperty(property)) {
					if (property.toLowerCase() === $scope.myGuess.toLowerCase()) {
						console.log('CORRRECT');
					} else {
						console.log('INCORRECT');
					}

					// console.log('prop ', property);
					// console.log('prop is a typeof --> ', typeof property);
					// console.log('myGuess ', $scope.myGuess);
					// console.log('myGuess is a typeof -> ', typeof $scope.myGuess);

				}
			}

		};


		$scope.tilePick = function(myPick) {
			console.log('myPick --> ', myPick);
			$('.user-guess').append(myPick);
		};

		$scope.clearGuess = function() {
			$('.user-guess').html('');
		};

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
