controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(mySprite, 0, 0)
    myDart = darts.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . c b a c . . . . . . 
        . . . . c c b c f a c . . . . . 
        . . . . a f b b b a c . . . . . 
        . . . . a f f b a f c c . . . . 
        . . . . c b b a f f c . . . . . 
        . . . . . b b a f a . . . . . . 
        . . . . . . c b b . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player, mySprite.x, mySprite.y)
    myDart.controlWithArrowKeys()
    myDart.setTrace()
    myDart.setFlag(SpriteFlag.GhostThroughWalls, true)
    pauseUntil(() => controller.B.isPressed())
    myDart.throwDart()
    controller.moveSprite(mySprite, 100, 100)
    mySprite.ay = 300
})
info.onScore(80, function () {
    game.gameOver(true)
})
let myDart: Dart = null
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`level2`)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . a a a a a a . . . . . . 
    . . . . a . . . . a . . . . . . 
    . . . . a . 9 . 9 a . . . . . . 
    . . . . a . . . . a . . . . . . 
    . . . . a . . . . a . . . . . . 
    . . . . a a a a a a . . . . . . 
    . . a a a . . . a a a . . . . . 
    . . a d a . . . a d a . . . . . 
    . . a d a . . . a d a . . . . . 
    . . a a a . . . a a a . . . . . 
    . . a d a . . . a d a . . . . . 
    . . a d a . . . a d a . . . . . 
    . . a a a . . . a a a . . . . . 
    `, SpriteKind.Player)
mySprite.ay = 300
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite)
forever(function () {
    if (myDart) {
        if (!(tiles.tileAtLocationEquals(myDart.tilemapLocation(), assets.tile`transparency16`))) {
            info.changeScoreBy(1)
        }
        tiles.setTileAt(myDart.tilemapLocation(), assets.tile`transparency16`)
        tiles.setWallAt(myDart.tilemapLocation(), false)
    }
})
