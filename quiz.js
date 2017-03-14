var questions = [
    {
        "question": "Which animal is not found in Antarctica?",
        "option1": "Chinstrap Penguin",
        "option2": "Blue Whale",
        "option3": "Polar Bear",
        "option4": "Leopard Seal",
        "answer": "3"
    },
    {
        "question": "How much of Antarctica's surface is covered by ice?",
        "option1": "3%",
        "option2": "55%",
        "option3": "70%",
        "option4": "97%",
        "answer": "4"
    },
    {
        "question": "What is a fjord?",
        "option1": "A glacial valley flooded by an arm of the ocean",
        "option2": "An accumulation of till deposited by a glacier",
        "option3": "An isolated mountain sticking up through the ice sheet",
        "option4": "A long, snake-like ridge",
        "answer": "1"
    },
    {
        "question": "In what year was Antarctica first sighted?",
        "option1": "1772",
        "option2": "1820",
        "option3": "1902",
        "option4": "1912",
        "answer": "2"
    },
    {
        "question": "Antarctica has all but the following:",
        "option1": "Low temperatures",
        "option2": "High winds",
        "option3": "High precipitation rates",
        "option4": "High elevation",
        "answer": "3"
    }
];

var currQuestion = 0;
var score = 0;
var numQuestions = questions.length;

var containerElem = document.getElementById("quizContainer");
var questionElem = document.getElementById("question");
var opt1Elem = document.getElementById("opt1");
var opt2Elem = document.getElementById("opt2");
var opt3Elem = document.getElementById("opt3");
var opt4Elem = document.getElementById("opt4");
var nextButtonElem = document.getElementById("nextButton");
var resultContElem = document.getElementById("result");
var scoreElem = document.getElementById("score");

function loadQuestion(questionIndex) {
    var q = questions[questionIndex];
    questionElem.innerHTML = (questionIndex + 1) + ". " + q.question;
    opt1Elem.innerHTML = q.option1;
    opt2Elem.innerHTML = q.option2;
    opt3Elem.innerHTML = q.option3;
    opt4Elem.innerHTML = q.option4;
}

function loadNextQuestion() {
    var selectedOption = document.querySelector("input[type=radio]:checked");
    if (!selectedOption) {
        return;
    }
    
    if (questions[currQuestion].answer == selectedOption.value) {
        score += 1;
    }
    selectedOption.checked = false;
    currQuestion += 1;
    if (currQuestion == numQuestions - 1) {
        nextButtonElem.innerHTML = 'Done';
    }
    if (currQuestion == numQuestions) {
        containerElem.style.display = "none";
        resultContElem.style.display = "";
        scoreElem.innerHTML = score + "/" + numQuestions;
        return;
    }
    loadQuestion(currQuestion);
}

loadQuestion(currQuestion);