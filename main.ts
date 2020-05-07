enum SpriteKindLegacy {
    Player,
    Projectile,
    Food,
    Enemy
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    transformSprites.changeRotation(mySprite, 0 - rotationIncrement)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    transformSprites.changeRotation(mySprite, rotationIncrement)
})
let rotationIncrement = 0
let mySprite: Sprite = null
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . 
. . 1 1 . . . . . . . . . . 1 1 . . 
. . 1 1 . . . . . . . . . . 1 1 . . 
. . . . 1 . . . . . . . . 1 . . . . 
. . . . . 1 . . . . . . 1 . . . . . 
. . . . . . 1 . . . . 1 . . . . . . 
. . . . . . . 1 . . 1 . . . . . . . 
. . . . . . . . 1 1 . . . . . . . . 
. . . . . . . . 1 1 . . . . . . . . 
. . . . . . . 1 . . 1 . . . . . . . 
. . . . . . 1 . . . . 1 . . . . . . 
. . . . . 1 . . . . . . 1 . . . . . 
. . . . 1 . . . . . . . . 1 . . . . 
. . 1 1 . . . . . . . . . . 1 1 . . 
. . 1 1 . . . . . . . . . . 1 1 . . 
. . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . 
`, SpriteKindLegacy.Player)
mySprite.setPosition(16, 16)
rotationIncrement = 10
