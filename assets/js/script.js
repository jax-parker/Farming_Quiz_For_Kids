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
const questions = [{
    question: 'A day on the farm begins early. What animal crows when the sun comes up?',
    answers: [{
            text: 'Rooster',
            correct: true
        },
        {
            text: 'Cow',
            correct: false
        },
        {
            text: 'Horse',
            correct: false
        },
        {
            text: 'Sheep',
            correct: false
        },
    ]
},
{
    question: 'One of the first chores of the day is to milk the ________?',
    answers: [{
            text: 'Pigs',
            correct: false
        },
        {
            text: 'Cows',
            correct: true
        },
        {
            text: 'Chickens',
            correct: false
        },
        {
            text: 'Horses',
            correct: false
        },
    ]
},
{
    question: 'What is used on a farm to keep animals from wandering off and keep wild animals out?',
    answers: [{
            text: 'Post',
            correct: false
        },
        {
            text: 'Harness',
            correct: false
        },
        {
            text: 'Fence',
            correct: true
        },
        {
            text: 'House',
            correct: false
        },
    ]
},
{
    question: 'If you are planting crops on your farm, what do you need to help plough the field?',
    answers: [{
            text: 'Hedge Trimmer',
            correct: false
        },
        {
            text: 'Lawnmower',
            correct: false
        },
        {
            text: 'Wagon',
            correct: false
        },
        {
            text: 'Tractor',
            correct: true
        },
    ]
},
{
    question: 'A farm that only grows crops is called what?',
    answers: [{
            text: 'Arable',
            correct: true
        },
        {
            text: 'Emmerdale',
            correct: false
        },
        {
            text: 'Lowland',
            correct: false
        },
        {
            text: 'Pastoral',
            correct: false
        },
    ]
},
{
    question: 'When the crops are ripe, what must you do so that you can take them to market?',
    answers: [{
            text: 'Eat',
            correct: false
        },
        {
            text: 'Plant',
            correct: false
        },
        {
            text: 'Harvest',
            correct: true
        },
        {
            text: 'Prune',
            correct: false
        },
    ]
},
{
    question: 'When we remove the wool from the sheep in the summer to keep them cool, it is called?',
    answers: [{
            text: 'Drilling',
            correct: false
        },
        {
            text: 'Shaving',
            correct: false
        },
        {
            text: 'Shearing',
            correct: true
        },
        {
            text: 'Clipping',
            correct: false
        },
    ]
},
{
    question: 'Which animal on the farm lays eggs?',
    answers: [{
            text: 'Pig',
            correct: false
        },
        {
            text: 'Cow',
            correct: false
        },
        {
            text: 'Horse',
            correct: false
        },
        {
            text: 'Chicken',
            correct: true
        },
    ]
},
{
    question: 'Who helps the farmer round up the sheep?',
    answers: [{
            text: 'Rooster',
            correct: false
        },
        {
            text: 'Sheepdog',
            correct: true
        },
        {
            text: 'Chicken',
            correct: false
        },
        {
            text: 'Pig',
            correct: false
        },
    ]
},
{
    question: 'What does a farmer wear to keep their feet warm and dry?',
    answers: [{
            text: 'Slippers',
            correct: false
        },
        {
            text: 'Sandals',
            correct: false
        },
        {
            text: 'Trainers',
            correct: false
        },
        {
            text: 'Wellies',
            correct: true
        },
    ]
}

];

