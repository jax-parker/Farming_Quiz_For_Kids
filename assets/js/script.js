/* grab elements from html*/
const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
let shuffledQuestions, currentQuestionsIndex;

/**
 * Collect name entered in input box by user & when start button is clicked - execute startGame,
 * show next button after start & increment by one
 */
function nameFunction() {
    let userInput = document.querySelector('#userInput');
    let message = document.querySelector('#message');
}
startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionsIndex++;
    setNextQuestion();
});

/**
 * Function to start the game, hide start button, hide user input, set shuffled questions array,
 *  set current questions index & show the next question*/
function startGame() {
    startButton.classList.add('hide');
    userInput.classList.add('hide');
    message.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionsIndex = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
}

/** Function to set the next question, reset and show next question*/
function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionsIndex]);
}
/**
 * Function to clear answers and set the next question, hide next btn, loop through children of all our answer button elements
 * if there is a child I want to remove it and the first child for it
 */
function resetState() {
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

/**
 * Function to set the next question, loop through, make/set button text, add button class & check answer is correct
 * add css to buttons, event listener to button clicked and add to answer buttons element and remove old answers
 */
function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);

    });
    
}

/**
 * Function to select the correct answer & set loop limit & delay message after last question
 */
function selectAnswer(e) {
    const selectedAnswer = e.target;
    const correctAnswer = selectedAnswer.dataset.correct;

    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
    if (correctAnswer){
        incrementScore();
    }else {
        incrementWrongAnswer();
    }
    if (shuffledQuestions.length > currentQuestionsIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
            setTimeout(function () {
            questionContainerElement.classList.add('hide');
            message.classList.remove('hide'); {
            message.innerHTML = 'You are going to be a great farmer, ' + userInput.value;
            startButton.innerText = 'Click here to play again';
            startButton.classList.remove('hide');
            startButton.addEventListener('click', () => {
                document.getElementById('score').innerText = 0;
                document.getElementById('incorrect').innerText = 0;
            });
            }
        }, 1500);
    }
   
}

/**
 * Function to show if answer was correct or wrong, clear status of element, add correct/incorrect css*/
function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');

    } else {
        element.classList.add('wrong');
    }
    
}
/**
 * Function to clear the status and remove css
 */
function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
    
}
// Increment correct score
function incrementScore() {
    let oldScore = parseInt(document.getElementById('score').innerText);
    document.getElementById('score').innerText = ++oldScore;
}

//Increment incorrect score
function incrementWrongAnswer() {
    let oldScore = parseInt(document.getElementById('incorrect').innerText);
    document.getElementById('incorrect').innerText = ++oldScore;
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