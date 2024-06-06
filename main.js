import questions from "./questions.json"

let titleScreen = document.getElementById("titleScreen");
let questionScreen = document.getElementById("questionScreen");
let running = false;
let currentQuestion = 0;
let guesses = 0;

function changeQuestion() {

}

function start() {
    running = true;
    titleScreen.style.opacity = 0;
    questionScreen.style.opacity = 1;
    titleScreen.style.zIndex = -1
    questionScreen.style.zIndex = 1
    console.log(questions)
}

document.getElementById("start").addEventListener("click", start);