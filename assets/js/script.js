/* grab elements from html*/
const startButton = document.getElementById('start-btn');
const nextButton= document.getElementById('next-btn');
const scoreContainer = document.querySelector('.score-container');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
let shuffledQuestions, currentQuestionsIndex;

/**
 * Collect name entered in input box by user
 */
function nameFunction() {
    let userInput = document.querySelector('#userInput');
    let message = document.querySelector('#message');
}
//when start button is clicked - execute startGame, show next button after start & increment by one
questionContainerElement.classList.add('hide');
nextButton.classList.add('hide');
startButton.addEventListener('click', startGame);
console.log('started');
nextButton.addEventListener('click', () => {
    currentQuestionsIndex++;
    setNextQuestion();
})

/**
 * Function to start the game, hide start button, hide user input, set shuffled questions array,
 *  set current questions index & show the next question*/
function startGame() {
    startButton.classList.add('hide');
    userInput.classList.add('hide');
    questionContainerElement.classList.remove('hide');
    shuffledQuestions=questions.sort(() => Math.random() -0.5);
    currentQuestionsIndex = 0;
    setNextQuestion();
}
/** Function to set the next question */
function setNextQuestion() {

}
/**
 * Function to set the next question
 */
function showQuestion() {

}

/**
 * Function to show if answer was correct or wrong */
function setStatusClass() {

}
/**
 * Function to clear the status class
 */
function clearStatusClass() {

}


/**
 * Function to clear answers and set the next question
 */
function resetState() {

}

/**
 * Function to select the correct answer & set loop limit
 */

function selectAnswer() {

}

/*List of questions for quiz*/


