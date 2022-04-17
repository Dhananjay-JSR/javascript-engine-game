export default config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 1024,
    height: 720,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: true
        }
    },
    scene: [ MyGame ]
};