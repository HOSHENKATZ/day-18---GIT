'use strict'
var gBallSize = 100
function onBallClick() {
    var ball = document.querySelector('.ball')
    var ballSize = ball.innerText
    console.dir(ball)
    ball.style.width = gBallSize + 50
    ball.style.height = gBallSize + 50
    ball.innerText = gBallSize + 50
    gBallSize += 50

    if (gBallSize> 400){
        gBallSize = 100
        ball.style.width = gBallSize 
        ball.style.height = gBallSize
        ball.innerText = gBallSize
    }
}