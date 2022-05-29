var pageContentEl = document.querySelector("#page-content");
var wrapperEl = document.querySelector("#wrapper");
var questionCounter = 0;
var correctAnswers = 0;
var quizKey = [
    {
        question: "Javascript requires header files.",
        answer: false
    },
    {
        question: "A function doesn't require a semicolon after the closing curly brace.",
        answer: true
    },
    {
        question: "Two equals signs set a variable equal to a value.",
        answer: false
    },
    {
        question: 'The "%" symbol is known as the "modulus operator".',
        answer: true
    },
    {
        question: "JavaScript is the same programming language as Java.",
        answer: false
    }
];

var createStarterPage = function () {
    var headerItemEl = document.createElement("h1");
    headerItemEl.className = "header-text";
    headerItemEl.textContent = "Code Quiz";

    wrapperEl.appendChild(headerItemEl);

    var subtextItemEl = document.createElement("p");
    subtextItemEl.className = "add-text";
    subtextItemEl.textContent = "You will have 60 seconds to answer five questions. Each incorrect answer will subtract seconds off the remaining time. The top five scores will be saved."

    wrapperEl.appendChild(subtextItemEl);

    var buttonItemEl = document.createElement("button");
    buttonItemEl.className = "start-btn";
    buttonItemEl.id = "start-btn";
    buttonItemEl.textContent = "Start Quiz";

    wrapperEl.appendChild(buttonItemEl);
};

var createQuestionPages = function () {
    var headerItemEl = document.createElement("h1");
    headerItemEl.className = "header-text";
    headerItemEl.textContent = quizKey[questionCounter].question;

    wrapperEl.appendChild(headerItemEl);

    for (i = 0; i < 2; i++) {
        var buttonItemEl = document.createElement("button");
        buttonItemEl.className = "option-btn";

        buttonItemEl.textContent = "True";
        buttonItemEl.id = "true";
        wrapperEl.appendChild(buttonItemEl);

        if (i == 1) {
            buttonItemEl.textContent = "False";
            buttonItemEl.id = "false";
            wrapperEl.appendChild(buttonItemEl);
        }
    }
    questionCounter += 1;
};

var createEndPage = function () {
    var headerItemEl = document.createElement("h1");
    headerItemEl.className = "header-text";
    headerItemEl.textContent = "Finished!";

    wrapperEl.appendChild(headerItemEl);

    var subtextItemEl = document.createElement("p");
    subtextItemEl.className = "add-text";
    subtextItemEl.textContent = "You score for this quiz is...";

    wrapperEl.appendChild(subtextItemEl);

    var buttonItemEl = document.createElement("button");
    buttonItemEl.className = "option-btn";
    buttonItemEl.id = "back-btn";
    buttonItemEl.textContent = "Try Again";

    wrapperEl.appendChild(buttonItemEl);
};

var revertToDefault = function () {
    wrapperEl.remove();
    wrapperEl = document.createElement("div");
    wrapperEl.className = "wrapper";
    wrapperEl.id = "wrapper";
    pageContentEl.appendChild(wrapperEl);
};

var createPageHandler = function (event) {
    var targetEl = event.target;

    switch (true) {
        case targetEl.matches("#start-btn"):
            revertToDefault();
            createQuestionPages();
            break;

        case targetEl.matches(".option-btn") && questionCounter > 0 && questionCounter < 5:
            revertToDefault();
            createQuestionPages();
            break;

        case targetEl.matches(".option-btn") && questionCounter == 5:
            revertToDefault();
            createEndPage();
            break;

        case targetEl.matches("#back-btn"):
            revertToDefault();
            createStarterPage();
            break;
    }
};

var answerCheckHandler = function (event) {
};

createStarterPage();
pageContentEl.addEventListener("click", createPageHandler);
pageContentEl.addEventListener("click", answerCheckHandler);