'use strict'
var gBallSize = 100
function onBallClick() {
    var ball = document.querySelector('.ball')
    var ballSizeToAdd = getRandomIntInclusive(20, 60)
   console.dir(ball)
    ball.style.width = gBallSize + ballSizeToAdd
    ball.style.height = gBallSize + ballSizeToAdd
    ball.innerText = gBallSize + ballSizeToAdd
    gBallSize += ballSizeToAdd
    ball.style.backgroundColor = getRandomColor()

    if (gBallSize > 400) {
        gBallSize = 100
        ball.style.width = gBallSize
        ball.style.height = gBallSize
        ball.innerText = gBallSize
        ball.style.backgroundColor = 'dodgerblue'
    }

   
}