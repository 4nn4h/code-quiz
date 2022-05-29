var pageContentEl = document.querySelector("#page-content");
var wrapperEl = document.querySelector("#wrapper");

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
    buttonItemEl.textContent = "Start Quiz";

    wrapperEl.appendChild(buttonItemEl);
};

var questionPages = function () {
    var headerItemEl = document.createElement("h1");
    headerItemEl.className = "header-text";
    headerItemEl.textContent = "Test";

    wrapperEl.appendChild(headerItemEl);

    for (i = 0; i < 2; i++){
        var buttonItemEl = document.createElement("button");
        buttonItemEl.className = "option-button";
        buttonItemEl.textContent = "Answer";
        wrapperEl.appendChild(buttonItemEl);
    }
};

var revertToDefault = function () {
    wrapperEl.remove();
    wrapperEl = document.createElement("div");
    wrapperEl.className = "wrapper";
    wrapperEl.id = "wrapper";
    pageContentEl.appendChild(wrapperEl);
};

var buttonHandler = function(event) {
    targetEl = event.target;

    if (targetEl.matches(".start-btn")) {
        revertToDefault();
        questionPages();
    }
};

createStarterPage();
pageContentEl.addEventListener("click", buttonHandler);