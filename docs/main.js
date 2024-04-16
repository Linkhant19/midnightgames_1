const topics = [
    { topic: "SPORTS", answer: "badminton" },
    { topic: "CLOTHING ITEM", answer: "shirt" },
    { topic: "VIDEO GAME", answer: "valorant" }, 
    { topic: "SONG", answer: "labyrinth" },
    { topic: "BOARD GAME", answer: "catan" },
    { topic: "MYTHICAL CREATURE", answer: "phoenix" },
    { topic: "MOBILE APP", answer: "maps" },
    { topic: "1-10", answer: "4" },
    { topic: "MARVEL CHARACTER", answer: "spiderman" },
    { topic: "ALBUM", answer: "reputation" },
    { topic: "COLOR", answer: "blue" },
    { topic: "BODY PART", answer: "elbow" },
    { topic: "BRAND", answer: "uniqlo" },
    { topic: "COUNTRY", answer: "canada" },
    { topic: "CITY", answer: "paris" },
    { topic: "ELEMENT", answer: "water" },
    { topic: "PET", answer: "cat" },
    { topic: "ANIMAL", answer: "fox" },
    { topic: "NAME", answer: "nelson" },
    { topic: "FOOD", answer: "bread" }
];

let currentQuestionIndex = 0;

function displayCurrentTopic() {
    const currentTopic = topics[currentQuestionIndex].topic;
    document.getElementById('question').innerHTML = `<p>Topic: ${currentTopic}</p>`;
}

function checkGuess(guess) {
    const correctAnswer = topics[currentQuestionIndex].answer;
    return guess.trim().toLowerCase() === correctAnswer.toLowerCase();
}

function submitGuess() {
    var guess = document.getElementById('guessInput').value;

    // calls the function checkGuess to see if the guess is correct! 

    if (checkGuess(guess)) { 
        document.getElementById('text').getElementsByTagName('p')[0].innerHTML = "Correct!";
        increaseScore();
        showNextButton();
    } else {
        document.getElementById('text').getElementsByTagName('p')[0].innerHTML = "Wrong!";
        showRestartButton();
    }
}

function increaseScore() {
    var score = document.getElementById('score');
    score.innerText = parseInt(score.innerText) + 1;
}

function showRestartButton() {
    document.getElementById('restartButton').style.display = 'block';
    disableGuessing();
}

function showNextButton() {
    document.getElementById('nextButton').style.display = 'block';
    disableGuessing();
}

// this is to prevent my players from guessing multiple times without clicking the restart or next button
function disableGuessing() {
    document.getElementById('guessInput').disabled = true;
    document.getElementById('GuessButton').disabled = true;
}

function enableGuessing() {
    document.getElementById('guessInput').disabled = false; 
    document.getElementById('GuessButton').disabled = false; 
}

function restartGame() {
    // 1. Hide the restart button and next button
    document.getElementById('restartButton').style.display = 'none'; 
    document.getElementById('nextButton').style.display = 'none';
    
    // 2. Reset the text
    document.getElementById('text').getElementsByTagName('p')[0].innerHTML = "Guess what I am thinking"; 

    // 3. Reset the input field
    document.getElementById('guessInput').value = ''; 

    // 4. Change the score back to zero
    document.getElementById('score').innerText = '0'; 

    // 5. Start from the first question again
    currentQuestionIndex = 0;
    displayCurrentTopic();

    // 6. Enable guessing
    enableGuessing();
}

function nextQuestion() {

    // 1. Increase the question index 
    currentQuestionIndex = (currentQuestionIndex + 1) % topics.length;
    displayCurrentTopic();

    // 2. Hide the next button
    document.getElementById('nextButton').style.display = 'none';

    // 3. Reset the text
    document.getElementById('text').getElementsByTagName('p')[0].innerHTML = "Guess what I am thinking"; 
    
    // 4. Reset the input field
    document.getElementById('guessInput').value = ''; 
    
    // 5. Enable guessing
    enableGuessing();
}

window.onload = displayCurrentTopic;
