let mixedParts = [];
let mixedClues = [];
const wordClue = {
	"NOBLE": "Periodic table gas",
	"OUSTS": "Removes from power",
	"OTHERS": "Not yourself",
	"SECULAR": "Not religious",
	"BUBBLES": "Oxygen in water",
	"KNOWLEDGE": "School gains"
};

function modulusLength(wordClue) {
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
modulusLength(wordClue);
console.log('mixedparts ', mixedParts);
console.log('mixedClues ', mixedClues);
