var pageContentEl = document.querySelector("#page-content");
var wrapperEl = document.querySelector("#wrapper");
var questionCounter = 0;
var quizKey = [
    {
        question: "Javascript requires header files.",
        answer: "False"
    },
    {
        question: "A function doesn't require a semicolon after the closing curly brace.",
        answer: "True"
    },
    {
        question: "Two equals signs set a variable equal to a value.",
        answer: "False"
    },
    {
        question: 'The "%" symbol is known as the "modulus operator".',
        answer: "True"
    },
    {
        question: "JavaScript is the same programming language as Java.",
        answer: "False"
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
    buttonItemEl.className = "option-btn";
    buttonItemEl.id = "start-btn";
    buttonItemEl.textContent = "Start Quiz";

    wrapperEl.appendChild(buttonItemEl);
};

var createQuestionPages = function () {
    var headerItemEl = document.createElement("h1");
    headerItemEl.className = "header-text";
    headerItemEl.textContent = quizKey[questionCounter].question;

    wrapperEl.appendChild(headerItemEl);

    for (i = 0; i < 2; i++){
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

var revertToDefault = function () {
    wrapperEl.remove();
    wrapperEl = document.createElement("div");
    wrapperEl.className = "wrapper";
    wrapperEl.id = "wrapper";
    pageContentEl.appendChild(wrapperEl);
};

var createPageHandler = function (event) {
    targetEl = event.target;

    if (targetEl.matches(".option-btn")) {
        revertToDefault();
        createQuestionPages();
    }
};

createStarterPage();
pageContentEl.addEventListener("click", createPageHandler);