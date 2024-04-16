function submitGuess() {
    var guess = document.getElementById('guessInput').value;

    // calls the function checkGuess to see if the guess is correct! 

    if (checkGuess(guess)) { 
        document.getElementById('text').getElementsByTagName('p')[0].innerHTML = "Correct!";
        increaseScore();
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
}

function restartGame() {
    // 1. Hide the restart button
    document.getElementById('restartButton').style.display = 'none'; 
    
    // 2. Reset the text
    document.getElementById('text').getElementsByTagName('p')[0].innerHTML = "Guess what I am thinking"; 

    // 3. Reset the input field
    document.getElementById('guessInput').value = ''; 

    // 4. Change the score back to zero
    document.getElementById('score').innerText = '0'; 
}

function checkGuess(guess) {
    return false
}
