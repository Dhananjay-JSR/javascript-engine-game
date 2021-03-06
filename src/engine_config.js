import Main_Scene from "./Main_Scene";
import {AUTO} from "phaser";
import MainMenu from "./Main_Menu";
import Main_Scene_2 from "./Main_scene_2";


const config = {
    type: AUTO,
    autoCenter : true,
    scale: {
        parent: 'canva-parent',
        autoCenter: Phaser.Scale.CENTER_HORIZONTALLY,
        mode:Phaser.Scale.FIT,
        width: '100%',
        height: '100%'
    },
    scene: [ MainMenu,Main_Scene , Main_Scene_2   ] // :TODO: Add MainMenu,Main_Scene , Main_Scene_2 
};

export default config;