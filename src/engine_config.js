import Main_Scene from "./Main_Scene";
import {AUTO} from "phaser";
import MainMenu from "./Main_Menu";

const config = {
    type: AUTO,
    parent: 'root-example',
    width: 1024,
    height: 720,
    scene: [ MainMenu ]
};

export default config;