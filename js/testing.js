// test only - delete for production
const words = ['tiger', 'sheep', 'badger', 'giraffe', 'platypus', 'porcupine'];
//words. 5x2, 1x6, 1x7, 1x8 & 1x9
const clues = ['this word has five letters', 'this word has five letters too', 'this word has six letters', 'this word has seven letters', 'this word has eight letters', 'this word has nine letters'];
//clues - x6. Has number in each to mark
///////////////////////////////////////
//**
///////////////////////////////////////
//** 50% chance of true / false
function randomTruth() {
	if (Math.random() > 0.5) {
		return true;
	} else {
		return false;
	}
}
//** Sum of an Array (all 6 words)
let total = 0;

function getSum(numbers) {
	for (let i = 0; i < numbers.length; i++)
		total += numbers[i];
	console.log('total', total);
	return total;
}
//** length of array items to be added in getSum function
let letterCount = []; //
function stuff(wordArray) {
	for (let i = 0; i < wordArray.length; i++) {
		letterCount.push(wordArray[i].length);
		console.log('letterCount --> ', letterCount);
	}

}
stuff(words); // counts length of strings in array items
getSum(letterCount); // sum of string lengths from array
// const words = ['fiveM', 'five2', 'sixMMM', 'sevenMM', 'eightMMM', 'nineMMMMM'];
let mixedParts = []; // array for word sections ***********************IMPORTANT

function wordBreaker(wordChooser) {
	console.log('wordChooser', wordChooser);
	for (let j = 0; j < wordChooser.length; j++) {
		if (wordChooser[j].length === 5) {
			wordCountFive(wordChooser[j]);
		} else if (wordChooser[j].length === 6) {
			wordCountSix(wordChooser[j]);
		} else if (wordChooser[j].length === 7) {
			wordCountSeven(wordChooser[j]);
		} else if (wordChooser[j].length === 8) {
			wordCountEight(wordChooser[j]);
		} else if (wordChooser[j].length === 9) {
			wordCountNine(wordChooser[j]);
		} else {
			console.log('Error in wordBreaker');
		}
	}
}

// function randomTruth() { // testing copy
// 	if (Math.random() > 0.5) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// } // testing copy

//** Five letter word
function wordCountFive(fiveLetterWord) {
	console.log('wordcount 5 Arg ', fiveLetterWord);
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
	console.log('wordcount 6 Arg ', sixLetterWord);
	mixedParts.push(sixLetterWord.slice(0, 2));
	mixedParts.push(sixLetterWord.slice(2, 4));
	mixedParts.push(sixLetterWord.slice(4, 6));
}

//** Seven letter word
function wordCountSeven(sevenLetterWord) {
	console.log('wordcount 7 Arg ', sevenLetterWord);
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
	console.log('wordcount 8 Arg ', eightLetterWord);
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
	console.log('wordcount 9 Arg ', nineLetterWord);
	mixedParts.push(nineLetterWord.slice(0, 3));
	mixedParts.push(nineLetterWord.slice(3, 6));
	mixedParts.push(nineLetterWord.slice(6, 9));
}
wordBreaker(words);
console.log('mixedparts ', mixedParts);
//** assigning vars to clues
//const clues = ['this word has five letters', 'this word has five letters too', 'this word has six letters', 'this word has seven letters', 'this word has eight letters', 'this word has nine letters'];
let fiveLetterClue = clues[0];
let fiveLetterClueTwo = clues[1];
let sixLetterClue = clues[2];
let sevenLetterClue = clues[3];
let eightLetterClue = clues[4];
let nineLetterClue = clues[5];

console.log('5 ltr clue => ', fiveLetterClue);
console.log('5 ltr clue(2) => ', fiveLetterClueTwo);
console.log('6 ltr clue => ', sixLetterClue);
console.log('7 ltr clue => ', sevenLetterClue);
console.log('8 ltr clue => ', eightLetterClue);
console.log('9 ltr clue => ', nineLetterClue);
