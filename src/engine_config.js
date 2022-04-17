import Main_Scene from "./Main_Scene";
import {AUTO} from "phaser";

const config = {
    type: AUTO,
    parent: 'root-example',
    width: 1024,
    height: 720,
    scene: [ Main_Scene ]
};

export default config;