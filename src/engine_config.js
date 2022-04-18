import Main_Scene from "./Main_Scene";
import {AUTO} from "phaser";
import MainMenu from "./Main_Menu";

const config = {
    type: AUTO,
    autoCenter : true,
    scale: {
        mode: Phaser.Scale.RESIZE,
        parent: 'canva-parent',
        width: '100%',
        height: '100%'
    },
    scene: [ MainMenu,Main_Scene ] // :TODO: Add MainMenu here at first 
};

export default config;