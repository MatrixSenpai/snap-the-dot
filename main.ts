input.onButtonPressed(Button.A, function () {
    if (sprite.get(LedSpriteProperty.X) == 2) {
        music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once)
        game.addScore(1)
    } else {
        music.startMelody(music.builtInMelody(Melodies.PowerDown), MelodyOptions.Once)
        game.removeLife(1)
    }
})
let sprite: game.LedSprite = null
sprite = game.createSprite(2, 2)
game.setLife(3)
basic.forever(function () {
    sprite.move(1)
    sprite.ifOnEdgeBounce()
    basic.pause(200)
})
basic.forever(function () {
    if (game.isGameOver()) {
    	
    }
})
