import Main_Scene from "./Main_Scene";
import Phaser from "phaser";

const config = {
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
    scene: [ Main_Scene ]
};

export default config;