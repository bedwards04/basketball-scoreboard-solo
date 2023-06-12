let homeScore = 0
let awayScore = 0
const homeScoreEl = document.getElementById("home-score-el")
const awayScoreEl = document.getElementById("away-score-el")


//add 1 point to score
function add1PointHomeScore() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

function add1PointAwayScore() {
    awayScore += 1
    awayScoreEl.textContent = awayScore
}

//add 2 points to score
function add2PointsHomeScore() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

function add2PointsAwayScore() {
    awayScore += 2
    awayScoreEl.textContent = awayScore
}

//add 3 points to score
function add3PointsHomeScore() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
}

function add3PointsAwayScore() {
    awayScore += 3
    awayScoreEl.textContent = awayScore
}

//start new game
function startNewGame() {
    homeScore = 0
    awayScore = 0
    homeScoreEl.textContent = 0
    awayScoreEl.textContent = 0
}