import Phaser from 'phaser';
import _23557 from './assets/ascending/23557.png';
import _23577 from './assets/ascending/23577.png';
import _23757 from './assets/ascending/23757.png';
import _23775 from './assets/ascending/23775.png';
import _27375 from './assets/ascending/27375.png';
import trainStart from './assets/video/train_in.mp4'
import trainEnd from './assets/video/train_out.mp4'
import Main_Scene_2 from './Main_scene_2';

class Main_Scene extends Phaser.Scene
{
    constructor ()
    {
        super({
            key: 'Main_Scene'
        });
        this.filled = false;
        this.itemInTr1=null;
        this.itemInTr2=null;
        this.itemInTr3=null;
        this.itemInTr4=null;
        this.itemInTr5=null;
        this.VideoObj1;
        this.SceneManager = this.scene
    }

    preload ()
    {
        this.load.video('train_in', trainStart);
        this.load.video('train_out', trainEnd);
        this.load.image('23557',_23557);
        this.load.image('23577', _23577);
        this.load.image('23757', _23757);
        this.load.image('23775', _23775);
        this.load.image('27375', _27375);
    }
      
    create ()
    {
        
        // this.input.on('pointerdown',()=>{
        //    console.log( this.input.mousePointer.x, this.input.mousePointer.y)
        // })
        //TODO: ENable only for debugging

        // this.Create_Rectangle_Add_Scrollable_Meta();    
        // this.dragHandler();

        //TODO: enabled below for production

        this.VideoObj1 = this.add.video(650,300,'train_in').setScale(0.68).play(false).on('complete',()=>{
            this.Create_Rectangle_Add_Scrollable_Meta()
            this.dragHandler()
        })
      
        // this.trainVid1.play(false,0,7.21)
        // this.trainVid2.play(false,0,7.21)
        // this.trainVid2.on('complete',()=>{
        //     console.log("hello")
        // })

        this.textDisplay();
        


    }



    textDisplay(){
        this.textDisplay = this.add.text(163 , 36, 'Drag the numbers to the right order (Assending Order )', { font: '60px Georgia', fill: '#0000ff' }).setScale(0.68);
        
    }

    dragHandler(){
        this.input.on('dragend', (pointer, gameObject) => {
           // console.log(this.input.mousePointer.x, this.input.mousePointer.y) // TODO: REMOVE THIS IN PRODUCTION
            //----------------------- FOR TOP ROW SWAPPING ---------------------------------
            if(((this.input.mousePointer.x>=420)&&(this.input.mousePointer.x<=521))&&((this.input.mousePointer.y<=497)&&(this.input.mousePointer.y>=396))){
            // Stick Object to tr1 if it's detected within range
            gameObject.x=468  
            gameObject.y=448
            gameObject.setScale(0.1)
            this.itemInTr1=gameObject.name
           // console.log(`${gameObject.name} is in tr1`) // :TODO: Remove this line
            this.itemChecker();
            }
            else if (((this.input.mousePointer.x<=698 )&&(this.input.mousePointer.x>=590 ))&&((this.input.mousePointer.y<=497)&&(this.input.mousePointer.y>=396))){
                // Stick Object to tr2 if it's detected within range
                gameObject.x=639  
                gameObject.y=448
                gameObject.setScale(0.1)
                this.itemInTr2=gameObject.name
               // console.log(`${gameObject.name} is in tr2`) // :TODO: Remove this line
                this.itemChecker();
            }
            else if (((this.input.mousePointer.x<=875)&&(this.input.mousePointer.x>=766))&&((this.input.mousePointer.y<=497)&&(this.input.mousePointer.y>=396))){
                // Stick Object to tr3 if it's detected within range
                gameObject.x=811 
                gameObject.y=448
                gameObject.setScale(0.1)
                this.itemInTr3=gameObject.name
               // console.log(`${gameObject.name} is in tr3`) // :TODO: Remove this line
                this.itemChecker();
            }
            else if (((this.input.mousePointer.x<=1046 )&&(this.input.mousePointer.x>=940))&&((this.input.mousePointer.y<=497)&&(this.input.mousePointer.y>=396))){
                // Stick Object to tr4 if it's detected within range
                gameObject.x=987 
                gameObject.y=448
                gameObject.setScale(0.1)
                this.itemInTr4=gameObject.name
                //console.log(`${gameObject.name} is in tr4`) // :TODO: Remove this line
                this.itemChecker();
            
            }
            else if (((this.input.mousePointer.x<=1221)&&(this.input.mousePointer.x>=1116 ))&&((this.input.mousePointer.y<=497)&&(this.input.mousePointer.y>=396))){
                // Stick Object to tr5 if it's detected within range
                gameObject.x=1166 
                gameObject.y=448
                gameObject.setScale(0.1)
                this.itemInTr5=gameObject.name
                //console.log(`${gameObject.name} is in tr5`) // :TODO: Remove this line
                this.itemChecker();
            }
                

}
        );
    }
    itemChecker(){
      //  console.warn(`${this.itemInTr1} ${this.itemInTr2} ${this.itemInTr3} ${this.itemInTr4} ${this.itemInTr5} `)
        if((this.itemInTr1!=null)&&(this.itemInTr2!=null)&&(this.itemInTr3!=null)&&(this.itemInTr4!=null)&&(this.itemInTr5!=null)){
            this.input.off('drag')
            this.input.off('dragend')
            const number_align = [this.itemInTr1,this.itemInTr2,this.itemInTr3,this.itemInTr4,this.itemInTr5,this.itemInBr1,this.itemInBr2,this.itemInBr3,this.itemInBr4,this.itemInBr5]
          //  console.log(number_align) // :TODO: Remove this line
            this.OrderChecker(number_align);
        }
        


    }

    OrderChecker(number_array,type='assending'){
        this.correct_order = true
        let array_number = number_array
     //   console.log(array_number)  // :TODO: Remove this line
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
           // console.log("You WON") // :TODO: Remove this line
           this.textDisplay.text="YOU WON"
           this.textDisplay.x="537"
            
            this.VideoObj1.changeSource('train_out').play(false)
            this.VideoObj1.addMarker('train_out',0,7.2)
            this._23557.destroy();
            this._23577.destroy();
            this._23757.destroy()
            this._23775.destroy()
            this._27375.destroy()
            let localVideo1 = this.VideoObj1
            
            this.VideoObj1.on('complete',()=>{
                this._23557.destroy();
                this._23577.destroy();
                this._23757.destroy()
                this._23775.destroy()
                this._27375.destroy()
                this.VideoObj1.destroy();
                this.scene.start('Main_Scene_2')
                // let localText = this.add.text(571 ,478,"Refresh Page to Restart Game ", { font: '60px Arial', fill: '#FFFFFF' })
        
            })

        }
        else {
           // console.log("You Fail") // :TODO: Remove this line
            this.textDisplay.text="YOU LOOSE"
            this.textDisplay.x="537"
            this._23557.destroy();
            this._23577.destroy();
            this._23757.destroy()
            this._23775.destroy()
            this._27375.destroy()
            this.VideoObj1.destroy()
            let localText = this.add.text(430 ,378,"Refresh Page to Restart Game ", { font: '60px Arial', fill: '#FFFFFF' }).setScale(0.66)
        
   
            
      
            
            // this.registry.destroy(); // destroy registry
            // this.events.off()// disable all active events
            
        }
    }

    addTextAssets(){
        this._23775 = this.add.image( 243 , 459+472-350, '23775').setScale(0.2).setInteractive()
        this._23577 = this.add.image( 50+300+100, 459+472-350, '23577').setScale(0.2).setInteractive();
        this._23757 = this.add.image( 250+193+200, 459+472-350, '23757').setScale(0.2).setInteractive();
        this._27375 = this.add.image( 350+393+100, 459+472-350, '27375').setScale(0.2).setInteractive();
        this._23557 = this.add.image( 450+393+200, 459+472-350, '23557').setScale(0.2).setInteractive();
        this._23557.name=23557
        this._23577.name=23577
        this._23757.name=23757
        this._23775.name=23775
        this._27375.name=27375
        this.input.setDraggable([this._23557, this._23577, this._23757, this._23775, this._27375]);
        this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
            gameObject.x = dragX;
            gameObject.y = dragY;
        });
        
        
    }
    Create_Rectangle_Add_Scrollable_Meta(){
        //Function to initlize Rectable and Add Dragable Property and Populate Meta Data by Name Tag
        this.tr1 = this.add.rectangle(679-210, 223+493-270, 148, 148).setScale(0.68)
        this.tr2 = this.add.rectangle(942-297, 230+493-270, 148, 148).setScale(0.68)        //,0x9966ff).setStrokeStyle(4, 0xefc53f)
        this.tr3 = this.add.rectangle(1196-379 , 228+493-270, 148, 148).setScale(0.68)
        this.tr4 = this.add.rectangle(1450-455 , 230+493-270, 148, 148).setScale(0.68)
        this.tr5 = this.add.rectangle(1705-535 , 227+493-270, 148, 148).setScale(0.68)
       this.addTextAssets();

    //    this.physics.add.existing(this.zero)
    //    this.physics.add.existing(this.tr1)

    }
}

export default Main_Scene;