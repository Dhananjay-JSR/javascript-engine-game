import { Scene } from "phaser";
import  music from './assets/music/main_music.mp3';
import MainMenuImage from './assets/menu_bg.jpg'
import header from './assets/menu_img_1.png'
import startBtnImg from './assets/start.png'
import muteBtnImg from './assets/mute.png'
import mutedBtnImg from './assets/muted.png'
import Main_Scene from "./Main_Scene";

class MainMenu extends Scene {
    preload(){
        this.add.text(760,500,'Loading Assets',{fontSize: '64px', fill: '#fff'});
        this.load.image('menu_bg', MainMenuImage);
        this.load.audio('menu_music',music)
        this.load.image('header',header)
        this.load.image('startBtnImg',startBtnImg)
        this.load.image('muteBtnImg',muteBtnImg)
        this.load.image('mutedBtnImg',mutedBtnImg)
    }
    create(){
        let music_state = true;
        var music = this.sound.add('menu_music');
        
        this.add.image(960,600,'menu_bg').setScale(1);
       
        let menu_header = this.add.image(950,200,'header')
        this.tweens.add({
            targets: menu_header,
            y: 250,
            duration: 2000,
            ease: "Power2",
            yoyo: true,
            loop: -1
        });
        // this.sound.pauseOnBlur = false;
        music.play(); //TODO:Enable THis
        let startBtn = this.add.image(950,700,'startBtnImg').setInteractive().on('pointerdown',()=>{
            // this.scene.destroy('MainMenu');
            this.scene.start('MainGame');
            music.pause();
        })
      
        let muteBtn = this.add.image(950,900,'muteBtnImg').setInteractive().on('pointerdown',()=>{
            if (music_state){
                music.pause();
                music_state = false;
                muteBtn.setTexture('mutedBtnImg')
            }
            else{
                music.resume();
                music_state = true;
                muteBtn.setTexture('muteBtnImg')
            }
        })
    }
}
export default MainMenu;