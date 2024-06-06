import questions from "./questions"

let titleScreen = document.getElementById("titleScreen");
let questionScreen = document.getElementById("questionScreen");
let running = false;
let currentQuestion = 0;
let guesses = 0;
let questionHeader = document.getElementsByTagName("h1")[1];

let currentQuestionElement = document.getElementById("currentQuestion");

function changeQuestion() {
    currentQuestionElement.innerText = currentQuestion;
    let questionN = Math.round(Math.random()*(questions.length-1))


}

export function submit(x) {
    currentQuestion++;
    changeQuestion();
}

function start() {
    running = true;
    changeQuestion();
    titleScreen.style.opacity = 0;
    questionScreen.style.opacity = 1;
    titleScreen.style.zIndex = -1
    questionScreen.style.zIndex = 1
    console.log(questions)
}

document.getElementById("options").querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", submit)
})

document.getElementById("start").addEventListener("click", start);