'use strict'
var gBallSize = 100
function onBallClick(elBall, maxDiameter) {
    var ball = elBall
    var ballSizeToAdd = getRandomIntInclusive(20, 60)
   console.dir(ball)
    ball.style.width = gBallSize + ballSizeToAdd
    ball.style.height = gBallSize + ballSizeToAdd
    ball.innerText = gBallSize + ballSizeToAdd
    gBallSize += ballSizeToAdd
    ball.style.backgroundColor = getRandomColor()

    if (gBallSize > maxDiameter) {
        gBallSize = 100
        ball.style.width = gBallSize
        ball.style.height = gBallSize
        ball.innerText = gBallSize
    }

   
}