var pageContentEl = document.querySelector("#page-content");
var headerTextEl = document.querySelector("#header-text");
var subtextEl = document.querySelector("#subtext");
var wrapperEl = document.querySelector("#wrapper");

var createStarterPage = function () {
    var headerItemEl = document.createElement("h1");
    headerItemEl.className = "header-text";
    headerItemEl.textContent = "Code Quiz";

    headerTextEl.appendChild(headerItemEl);

    var subtextItemEl = document.createElement("p");
    subtextItemEl.className = "add-text";
    subtextItemEl.textContent = "You will have 60 seconds to answer five questions. Each incorrect answer will subtract seconds off the remaining time. The top five scores will be saved."

    subtextEl.appendChild(subtextItemEl);

    var buttonItemEl = document.createElement("button");
    buttonItemEl.className = "select-btn";
    buttonItemEl.textContent = "Start Quiz";

    wrapperEl.appendChild(buttonItemEl);
};

