import Main_Scene from "./Main_Scene";
import {AUTO} from "phaser";
import MainMenu from "./Main_Menu";

const config = {
    type: AUTO,
    autoCenter : true,
    scale: {
        mode: Phaser.Scale.RESIZE,
        parent: 'phaser-example',
        width: '100%',
        height: '100%'
    },
    scene: [ MainMenu,Main_Scene ]
};

export default config;