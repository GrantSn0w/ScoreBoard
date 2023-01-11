let homeScore = document.getElementById("home-score")
let score = 0
function increment1() {
    score += 1
    homeScore.textContent = score
}
function increment2() {
    score += 2
    homeScore.textContent = score
}
function increment3() {
    score += 3
    homeScore.textContent = score
}
let awayScore = document.getElementById("away-score")
let scOre = 0
function increMent1() {
    scOre += 1
    awayScore.textContent = scOre
}
function increMent2() {
    scOre += 2
    awayScore.textContent = scOre
}
function increMent3() {
    scOre += 3
    awayScore.textContent = scOre
}
function reFresh() {
    score = 0
    scOre = 0
    homeScore.textContent = score
    awayScore.textContent = scOre
}