import { Scene } from "phaser";
import  music from './assets/music/main_music.mp3';
import MainMenuImage from './assets/menu_bg.jpg'
import header from './assets/menu_img_1.png'

class MainMenu extends Scene {
    preload(){
        this.add.text(760,500,'Loading Assets',{fontSize: '64px', fill: '#fff'});
        this.load.image('menu_bg', MainMenuImage);
        this.load.audio('menu_music',music)
        this.load.image('header',header)
    }
    create(){
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
        this.sound.pauseOnBlur = false;
        music.play();
    }
}
export default MainMenu;