let homeScore = 0
let awayScore = 0
const homeScoreEl = document.getElementById("home-score-el")
const awayScoreEl = document.getElementById("away-score-el")


//add 1 point to score
function add1PointHomeScore() {
    homeScoreEl.textContent = homeScore += 1
}

function add1PointAwayScore() {
    awayScoreEl.textContent = awayScore += 1
}

//add 2 points to score
function add2PointsHomeScore() {
    homeScoreEl.textContent = homeScore += 2
}

function add2PointsAwayScore() {
    awayScoreEl.textContent = awayScore += 2
}

//add 3 points to score
function add3PointsHomeScore() {
    homeScoreEl.textContent = homeScore += 3
}

function add3PointsAwayScore() {
    awayScoreEl.textContent = awayScore += 3
}

//start new game
function startNewGame() {
    homeScoreEl.textContent = homeScore = 0
    awayScoreEl.textContent = awayScore = 0
}