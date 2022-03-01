let catcher = game.createSprite(2, 4)
let ball = game.createSprite(2, 0)
ball.set(LedSpriteProperty.Blink, 4)
while (!(ball.isTouching(catcher))) {
    basic.pause(500)
    ball.change(LedSpriteProperty.Y, 1)
}
