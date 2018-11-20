
var wordList = ["awkward", "bagpipes", "banjo", "bungler", "croquet", "crypt", "dwarves", "fervid",
    "fishhook", "fjord", "gazebo", "gypsy", "haiku", "haphazard", "hyphen", "ivory",
    "jazzy", "jiffy", "jinx", "jukebox", "kayak", "kiosk", "klutz", "memento",
    "mystify", "numbskull", "ostracize", "oxygen", "pajama", "phlegm", "pixel",
    "polka", "quad", "quip", "rhythmic", "rogue", "sphinx", "squawk", "swivel", "toady",
    "twelfth", "waxy", "wildebeest", "yacht", "zealous", "zigzag", "zippy", "zombie"];

var chances = 9;
var wins = 0;
var spaces = "";
var answerDisplay = "";
var wordArray = [];
var lettersGuessed = "";
var inGuessed = false;
var chancesDiv = document.getElementById("chances");
var winsDiv = document.getElementById("wins");
var guessedDiv = document.getElementById("guessed");

function getWord() {
    var wordChoice = wordList[Math.floor(Math.random() * wordList.length)];
    return wordChoice;
}


function createSpaces() {
    for (var i = 0; i < word.length; i++) {
        spaces += "_";
        wordArray.push("_");
    }
    console.log(wordArray);
    wordDiv.innerHTML = spaces;
}

var wordDiv = document.getElementById("word");
var word = getWord();
console.log(word);
createSpaces();


document.onkeyup = function (event) {
    var userGuess = event.key;
    if (lettersGuessed.includes(userGuess) === false) {
        inGuessed = false;
        lettersGuessed += userGuess;
        guessedDiv.innerHTML = "Letters Guessed: " + lettersGuessed.toUpperCase();
    }
    else {
        inGuessed = true;
    }
    var correct = false;
    for (var i = 0; i < word.length; i++) {
        if (word[i] === userGuess) {
            wordArray[i] = userGuess;
            correct = true;
        }
    }
    console.log(wordArray);
    answerDisplay = "";
    for (var i = 0; i < wordArray.length; i++) {
        if (wordArray[i] !== "1") {
            answerDisplay += wordArray[i];
        }
        else {
            answerDisplay += " ";
        }
    }
    wordDiv.innerHTML = answerDisplay;
    if (correct === false && inGuessed === false) {
        chances--;
        chancesDiv.innerHTML = "Number of guesses remaining: " + chances;
    }
    if (chances === 0) {
        chances = 9;
        chancesDiv.innerHTML = "Number of guesses remaining: " + chances;
        guessed.innerHTML = "Letters Guessed: ";
        spaces = "";
        answerDisplay = "";
        wordArray = [];
        lettersGuessed = "";
        word = getWord();
        console.log(word);
        createSpaces();
    }
    if (answerDisplay === word) {
        chances = 9;
        chancesDiv.innerHTML = "Number of guesses remaining: " + chances;
        wins++;
        winsDiv.innerHTML = "wins: " + wins;
        guessed.innerHTML = "Letters Guessed: ";
        spaces = "";
        answerDisplay = "";
        wordArray = [];
        lettersGuessed = "";
        word = getWord();
        console.log(word);
        createSpaces();
    }
};