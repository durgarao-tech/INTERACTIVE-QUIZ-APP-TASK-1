let questionsFormEl = document.getElementById("questionsForm");
let cityHyderabadEl = document.getElementById("cityHyderabad");
let cityChennaiEl = document.getElementById("cityChennai");
let cityDelhiEl = document.getElementById("cityDelhi");
let cityMumbaiEl = document.getElementById("cityMumbai");
let resultMsgEl = document.getElementById("resultMsg");

let capitalCity = "Delhi";
let selectedCity = null;

cityHyderabadEl.addEventListener("change", function(event) {
    selectedCity = event.target.value;
});

cityChennaiEl.addEventListener("change", function(event) {
    selectedCity = event.target.value;
});

cityDelhiEl.addEventListener("change", function(event) {
    selectedCity = event.target.value;
});
cityMumbaiEl.addEventListener("change", function(event) {
    selectedCity = event.target.value;
});

questionsFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    if (selectedCity === null) {
        resultMsgEl.textContent = "please select the city!";
        resultMsgEl.style.color = "#dc3545";
    } else if (selectedCity === capitalCity) {
        resultMsgEl.textContent = "Correct Answer!";
        resultMsgEl.style.color = "#2b9a40";
    } else {
        resultMsgEl.textContent = "Wrong Answer!";
        resultMsgEl.style.color = "#dc3545";
    }
});



let questionFormEl = document.getElementById("questionForm");
let gameCricketEl = document.getElementById("gameCricket");
let gameBadmintonEl = document.getElementById("gameBadminton");
let gameHockeyEl = document.getElementById("gameHockey");
let gameKabaddiEl = document.getElementById("gameKabaddi");
let answerMsgEl = document.getElementById("answerMsg");

let nationalGame = "Hockey";
let selectedGame = null;

gameCricketEl.addEventListener("change", function(event) {
    selectedGame = event.target.value;
});

gameBadmintonEl.addEventListener("change", function(event) {
    selectedGame = event.target.value;
});
gameHockeyEl.addEventListener("change", function(event) {
    selectedGame = event.target.value;
});
gameKabaddiEl.addEventListener("change", function(event) {
    selectedGame = event.target.value;
});

questionFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    if (selectedGame === null) {
        answerMsgEl.textContent = "please select the game!";
        answerMsgEl.style.color = "#dc3545";
    } else if (selectedGame === nationalGame) {
        answerMsgEl.textContent = "Correct Answer!";
        answerMsgEl.style.color = "#2b9a40";
    } else {
        answerMsgEl.textContent = "Wrong Answer!";
        answerMsgEl.style.color = "#dc3545";
    }
});