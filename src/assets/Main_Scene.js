import {Scene} from Phaser;
import zero from './assets/0.png';
import one from './assets/1.png';
import two from './assets/2.png';
import three from './assets/3.png';
import four from './assets/4.png';
import five from './assets/5.png';
import six from './assets/6.png';
import seven from './assets/7.png';
import eight from './assets/8.png';
import nine from './assets/9.png';

class Main_Scene extends Scene
{
    constructor ()
    {
        super()

    }

    preload ()
    {
        this.load.image('0', zero);
        this.load.image('1', one);
        this.load.image('2', two);
        this.load.image('3', three);
        this.load.image('4', four);
        this.load.image('5', five);
        this.load.image('6', six);
        this.load.image('7', seven);
        this.load.image('8', eight);
        this.load.image('9', nine);
    }
    create(){

    }
}

export default Main_Scene;