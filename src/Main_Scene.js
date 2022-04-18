import Phaser from 'phaser';
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
import trainStart from './assets/video/train_in.mp4'
import trainEnd from './assets/video/train_out.mp4'

class Main_Scene extends Phaser.Scene
{
    constructor ()
    {
        super({
            key: 'MainGame'
        });
        this.filled = false;
        this.itemInTr1=null;
        this.itemInTr2=null;
        this.itemInTr3=null;
        this.itemInTr4=null;
        this.itemInTr5=null;
        this.itemInBr1=null;
        this.itemInBr2=null;
        this.itemInBr3=null;
        this.itemInBr4=null;
        this.itemInBr5=null;

    }

    preload ()
    {
        this.load.video('train_in', trainStart);
        this.load.video('train_out', trainEnd);
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
      
    create ()
    {
        this.input.on('pointerdown',()=>{
           console.log( this.input.mousePointer.x, this.input.mousePointer.y)
        })
        // this.Create_Rectangle_Add_Scrollable_Meta();    
        // this.dragHandler();
        // this.textDisplay();
        this.getVideoFile();

    }

    getVideoFile(){
        let startVid2 = this.add.video(950,500,'train_in')
        let startVid1 = this.add.video(950,10,'train_in')
        startVid1.play(false,0,7.21)
        

        startVid1.on('complete',()=>{
            this.Create_Rectangle_Add_Scrollable_Meta();
            this.dragHandler();
        })
    }

    textDisplay(){
        this.textDisplay = this.add.text(170, 349, 'Drag the numbers to the right order (Assending Order )', { font: '24px Arial', fill: '#ffffff' });
        
    }

    dragHandler(){
        this.input.on('dragend', (pointer, gameObject) => {
            console.log(this.input.mousePointer.x, this.input.mousePointer.y) // TODO: REMOVE THIS IN PRODUCTION
            //----------------------- FOR TOP ROW SWAPPING ---------------------------------
            if((this.input.mousePointer.x<=144)&&(this.input.mousePointer.y<=144)){
            // Stick Object to tr1 if it's detected within range
            gameObject.x=74
            gameObject.y=74
            this.itemInTr1=gameObject.name
            console.log(`${gameObject.name} is in tr1`) // :TODO: Remove this line
            this.itemChecker();
            }
            else if (((this.input.mousePointer.x<=288)&&((this.input.mousePointer.x>=144))&&(this.input.mousePointer.y<=144))){
                // Stick Object to tr2 if it's detected within range
                gameObject.x=218
                gameObject.y=74
                this.itemInTr2=gameObject.name
                console.log(`${gameObject.name} is in tr2`) // :TODO: Remove this line
                this.itemChecker();
            }
            else if (((this.input.mousePointer.x<=432)&&((this.input.mousePointer.x>=288))&&(this.input.mousePointer.y<=144))){
                // Stick Object to tr3 if it's detected within range
                gameObject.x=366
                gameObject.y=74
                this.itemInTr3=gameObject.name
                console.log(`${gameObject.name} is in tr3`) // :TODO: Remove this line
                this.itemChecker();
            }
            else if (((this.input.mousePointer.x<=576)&&((this.input.mousePointer.x>=432))&&(this.input.mousePointer.y<=144))){
                // Stick Object to tr4 if it's detected within range
                gameObject.x=510
                gameObject.y=74
                this.itemInTr4=gameObject.name
                console.log(`${gameObject.name} is in tr4`) // :TODO: Remove this line
                this.itemChecker();
            
            }else if (((this.input.mousePointer.x<=720)&&((this.input.mousePointer.x>=576))&&(this.input.mousePointer.y<=144))){
                // Stick Object to tr5 if it's detected within range
                gameObject.x=654
                gameObject.y=74
                this.itemInTr5=gameObject.name
                console.log(`${gameObject.name} is in tr5`) // :TODO: Remove this line
                this.itemChecker();
            }

                 //----------------------- FOR BOTTOM ROW SWAPPING ---------------------------------

                 else if((this.input.mousePointer.x<=144)&&((this.input.mousePointer.y>=144)&&(this.input.mousePointer.y<=288))){
                    // Stick Object to br1 if it's detected within range
                    gameObject.x=74
                    gameObject.y=220
                    this.itemInBr1=gameObject.name
                    console.log(`${gameObject.name} is in br1`) // :TODO: Remove this line
                    this.itemChecker();
                    }
                    else if (((this.input.mousePointer.x<=288)&&((this.input.mousePointer.x>=144))&&((this.input.mousePointer.y>=144)&&(this.input.mousePointer.y<=288)))){
                        // Stick Object to tr2 if it's detected within range
                        gameObject.x=218
                        gameObject.y=220
                        this.itemInBr2=gameObject.name
                        console.log(`${gameObject.name} is in br2`) // :TODO: Remove this line
                        this.itemChecker();
                    }
                    else if (((this.input.mousePointer.x<=432)&&((this.input.mousePointer.x>=288))&&((this.input.mousePointer.y>=144)&&(this.input.mousePointer.y<=288)))){
                        // Stick Object to tr3 if it's detected within range
                        gameObject.x=366
                        gameObject.y=220
                        this.itemInBr3=gameObject.name
                        console.log(`${gameObject.name} is in br3`) // :TODO: Remove this line
                        this.itemChecker();
                    }
                    else if (((this.input.mousePointer.x<=576)&&((this.input.mousePointer.x>=432))&&((this.input.mousePointer.y>=144)&&(this.input.mousePointer.y<=288)))){
                        // Stick Object to tr4 if it's detected within range
                        gameObject.x=510
                        gameObject.y=220
                        this.itemInBr4=gameObject.name
                        console.log(`${gameObject.name} is in br4`) // :TODO: Remove this line
                        this.itemChecker();
                    
                    }else if (((this.input.mousePointer.x<=720)&&((this.input.mousePointer.x>=576))&&((this.input.mousePointer.y>=144)&&(this.input.mousePointer.y<=288)))){
                        // Stick Object to tr5 if it's detected within range
                        gameObject.x=654
                        gameObject.y=220
                        this.itemInBr5=gameObject.name
                        console.log(`${gameObject.name} is in br5`) // :TODO: Remove this line
                        this.itemChecker();
                    }
                

}
        );
    }
    itemChecker(){
        console.warn(`${this.itemInTr1} ${this.itemInTr2} ${this.itemInTr3} ${this.itemInTr4} ${this.itemInTr5} `)
        console.warn(`${this.itemInBr1} ${this.itemInBr2} ${this.itemInBr3} ${this.itemInBr4} ${this.itemInBr5} `)
        if((this.itemInTr1!=null)&&(this.itemInTr2!=null)&&(this.itemInTr3!=null)&&(this.itemInTr4!=null)&&(this.itemInTr5!=null)&&(this.itemInBr1!=null)&&(this.itemInBr2!=null)&&(this.itemInBr3!=null)&&(this.itemInBr4!=null)&&(this.itemInBr5!=null)){
            this.input.off('drag')
            this.input.off('dragend')
            const number_align = [this.itemInTr1,this.itemInTr2,this.itemInTr3,this.itemInTr4,this.itemInTr5,this.itemInBr1,this.itemInBr2,this.itemInBr3,this.itemInBr4,this.itemInBr5]
            console.log(number_align) // :TODO: Remove this line
            this.OrderChecker(number_align);
        }
        


    }

    OrderChecker(number_array,type='assending'){
        this.correct_order = true
        let array_number = number_array
        console.log(array_number)  // :TODO: Remove this line
        let expected_result = [...array_number]
        expected_result.sort(function(a, b){return a - b});// Assending Order {sort(function(a, b){return b - a});} -- > //Desencing Order
        for (let i=0;i<array_number.length;i++){
            if(this.correct_order){
                if(expected_result[i]!=array_number[i])
                    {
                        this.correct_order = false
                    }
            }
        }
        if(this.correct_order==true){
            console.log("You WON") // :TODO: Remove this line
            this.textDisplay.text="YOU WON"
        }
        else {
            console.log("You Fail") // :TODO: Remove this line
            this.textDisplay.text="YOU LOOSE"
        }
    }

    Create_Rectangle_Add_Scrollable_Meta(){
        //Function to initlize Rectable and Add Dragable Property and Populate Meta Data by Name Tag
        this.tr1 = this.add.rectangle(74, 74, 148, 148, 0x9966ff).setStrokeStyle(4, 0xefc53f)
        this.tr2 = this.add.rectangle(222, 74, 148, 148, 0x9966ff).setStrokeStyle(4, 0xefc53f)
        this.tr3 = this.add.rectangle(370, 74, 148, 148, 0x9966ff).setStrokeStyle(4, 0xefc53f)
        this.tr4 = this.add.rectangle(518, 74, 148, 148, 0x9966ff).setStrokeStyle(4, 0xefc53f)
        this.tr5 = this.add.rectangle(666, 74, 148, 148, 0x9966ff).setStrokeStyle(4, 0xefc53f)
        this.br1 = this.add.rectangle(74, 222, 148, 148, 0x9966ff).setStrokeStyle(4, 0xefc53f)
        this.br2 = this.add.rectangle(222, 222, 148, 148, 0x9966ff).setStrokeStyle(4, 0xefc53f)
        this.br3 = this.add.rectangle(370, 222, 148, 148, 0x9966ff).setStrokeStyle(4, 0xefc53f)
        this.br4 = this.add.rectangle(518, 222, 148, 148, 0x9966ff).setStrokeStyle(4, 0xefc53f)
        this.br5 = this.add.rectangle(666, 222, 148, 148, 0x9966ff).setStrokeStyle(4, 0xefc53f)  
        this.zero = this.add.image( 50, 600, '0').setScale(0.5).setInteractive()
        this.one = this.add.image( 150, 600, '1').setScale(0.5).setInteractive();
        this.two = this.add.image( 250, 600, '2').setScale(0.5).setInteractive();
        this.three = this.add.image( 350, 600, '3').setScale(0.5).setInteractive();
        this.four = this.add.image( 450, 600, '4').setScale(0.5).setInteractive();
        this.five = this.add.image( 550, 600, '5').setScale(0.5).setInteractive();
        this.six = this.add.image( 650, 600, '6').setScale(0.5).setInteractive();
        this.seven = this.add.image( 750, 600, '7').setScale(0.5).setInteractive();
        this.eight = this.add.image( 850, 600, '8').setScale(0.5).setInteractive();
        this.nine = this.add.image( 950, 600, '9').setScale(0.5).setInteractive();
        this.zero.name=0
        this.one.name=1
        this.two.name=2
        this.three.name=3
        this.four.name=4
        this.five.name=5
        this.six.name=6
        this.seven.name=7
        this.eight.name=8
        this.nine.name=9
        this.input.setDraggable([this.zero, this.one, this.two, this.three, this.four, this.five, this.six, this.seven, this.eight, this.nine]);
        this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
            gameObject.x = dragX;
            gameObject.y = dragY;
        });

    //    this.physics.add.existing(this.zero)
    //    this.physics.add.existing(this.tr1)

    }
}

export default Main_Scene;