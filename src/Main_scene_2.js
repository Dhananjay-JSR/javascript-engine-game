import Phaser from 'phaser';
import _67667 from './assets/descending/67667.png';
import _67676 from './assets/descending/67676.png';
import _67767 from './assets/descending/67767.png';
import _76766 from './assets/descending/76766.png';
import _77699 from './assets/descending/77699.png';
import trainStart from './assets/video/train_in.mp4'
import trainEnd from './assets/video/train_out.mp4'

class Main_Scene_2 extends Phaser.Scene
{
    constructor ()
    {
        super({
            key: 'Main_Scene_2'
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
        this.load.image('67667',_67667);
        this.load.image('67676', _67676);
        this.load.image('67767', _67767);
        this.load.image('76766', _76766);
        this.load.image('77699', _77699);
    }
      
    create ()
    {
        
        this.input.on('pointerdown',()=>{
           console.log( this.input.mousePointer.x, this.input.mousePointer.y)
        })
        // this.Create_Rectangle_Add_Scrollable_Meta();    
        // this.dragHandler();

        //TODO: enabled below for production

        this.VideoObj1 = this.add.video(950,500,'train_in').play(false).on('complete',()=>{
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
        this.textDisplay = this.add.text(333 , 36, 'Drag the numbers to the right order (Descending Order )', { font: '60px Georgia', fill: '#0000ff' });
        
    }

    dragHandler(){
        this.input.on('dragend', (pointer, gameObject) => {
           // console.log(this.input.mousePointer.x, this.input.mousePointer.y) // TODO: REMOVE THIS IN PRODUCTION
            //----------------------- FOR TOP ROW SWAPPING ---------------------------------
            if(((this.input.mousePointer.x>=607)&&(this.input.mousePointer.x<=751))&&((this.input.mousePointer.y<=296+493)&&(this.input.mousePointer.y>=149+493))){
            // Stick Object to tr1 if it's detected within range
            gameObject.x=676 
            gameObject.y=224+493
            gameObject.setScale(0.2)
            this.itemInTr1=gameObject.name
           // console.log(`${gameObject.name} is in tr1`) // :TODO: Remove this line
            this.itemChecker();
            }
            else if (((this.input.mousePointer.x<=1015)&&(this.input.mousePointer.x>=288))&&((this.input.mousePointer.y<=296+493)&&(this.input.mousePointer.y>=149+493))){
                // Stick Object to tr2 if it's detected within range
                gameObject.x=937 
                gameObject.y=224+493
                gameObject.setScale(0.2)
                this.itemInTr2=gameObject.name
               // console.log(`${gameObject.name} is in tr2`) // :TODO: Remove this line
                this.itemChecker();
            }
            else if (((this.input.mousePointer.x<=1269 )&&(this.input.mousePointer.x>=1123 ))&&((this.input.mousePointer.y<=296+493)&&(this.input.mousePointer.y>=149+493))){
                // Stick Object to tr3 if it's detected within range
                gameObject.x=1203
                gameObject.y=224+493
                gameObject.setScale(0.2)
                this.itemInTr3=gameObject.name
               // console.log(`${gameObject.name} is in tr3`) // :TODO: Remove this line
                this.itemChecker();
            }
            else if (((this.input.mousePointer.x<=1523)&&(this.input.mousePointer.x>=1377  ))&&((this.input.mousePointer.y<=296+493)&&(this.input.mousePointer.y>=149+493))){
                // Stick Object to tr4 if it's detected within range
                gameObject.x=1452
                gameObject.y=224+493
                gameObject.setScale(0.2)
                this.itemInTr4=gameObject.name
                //console.log(`${gameObject.name} is in tr4`) // :TODO: Remove this line
                this.itemChecker();
            
            }
            else if (((this.input.mousePointer.x<=1777)&&(this.input.mousePointer.x>=1634 ))&&((this.input.mousePointer.y<=296+493)&&(this.input.mousePointer.y>=149+493))){
                // Stick Object to tr5 if it's detected within range
                gameObject.x=1715
                gameObject.y=224+493
                gameObject.setScale(0.2)
                this.itemInTr5=gameObject.name
                //console.log(`${gameObject.name} is in tr5`) // :TODO: Remove this line
                this.itemChecker();
            }
                

}
        );
    }
    itemChecker(){
        console.warn(`${this.itemInTr1} ${this.itemInTr2} ${this.itemInTr3} ${this.itemInTr4} ${this.itemInTr5} `)
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
        expected_result.sort(function(a, b){return b - a});// Desecnding Order 
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
            this.textDisplay.x="837"
            
            this.VideoObj1.changeSource('train_out').play(false)
            this.VideoObj1.addMarker('train_out',0,7.2)
            this._77699.destroy();
            this._67676.destroy();
            this._67767.destroy()
            this._67667.destroy()
            this._76766.destroy()
            let localVideo1 = this.VideoObj1
            
            this.VideoObj1.on('complete',()=>{
                this._77699.destroy();
                this._67676.destroy();
                this._67767.destroy()
                this._67667.destroy()
                this._76766.destroy()
                localVideo1.destroy()
                let localText = this.add.text(571 ,478,"Restart game to Play Again ", { font: '60px Arial', fill: '#FFFFFF' })
        
            })

        }
        else {
           // console.log("You Fail") // :TODO: Remove this line
            this.textDisplay.text="YOU LOOSE THIS ROUND"
            this.textDisplay.x="837"
            this._77699.destroy();
            this._67676.destroy();
            this._67767.destroy()
            this._67667.destroy()
            this._76766.destroy()
            this.VideoObj1.destroy()
            
            // this.registry.destroy(); // destroy registry
            // this.events.off()// disable all active events
            
        }
    }

    addTextAssets(){
        
        this._67667 = this.add.image( 343 , 459+472, '67667').setScale(0.26).setInteractive()
        this._67676 = this.add.image( 50+493+100, 459+472, '67676').setScale(0.26).setInteractive();
        this._67767 = this.add.image( 250+493+200, 459+472, '67767').setScale(0.26).setInteractive();
        this._76766 = this.add.image( 350+593+300, 459+472, '76766').setScale(0.26).setInteractive();
        this._77699 = this.add.image( 450+693+400, 459+472, '77699').setScale(0.26).setInteractive();
        this._77699.name=77699
        this._67676.name=67676
        this._67767.name=67767
        this._67667.name=67667
        this._76766.name=76766
        this.input.setDraggable([this._77699, this._67676, this._67767, this._67667, this._76766]);
        this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
            gameObject.x = dragX;
            gameObject.y = dragY;
        });
        
        
    }
    Create_Rectangle_Add_Scrollable_Meta(){
        //Function to initlize Rectable and Add Dragable Property and Populate Meta Data by Name Tag
        this.tr1 = this.add.rectangle(679, 223+493, 148, 148)
        this.tr2 = this.add.rectangle(942, 230+493, 148, 148)        //,0x9966ff).setStrokeStyle(4, 0xefc53f)
        this.tr3 = this.add.rectangle(1196 , 228+493, 148, 148)
        this.tr4 = this.add.rectangle(1450 , 230+493, 148, 148)
        this.tr5 = this.add.rectangle(1705 , 227+493, 148, 148)
       this.addTextAssets();

    //    this.physics.add.existing(this.zero)
    //    this.physics.add.existing(this.tr1)

    }
}

export default Main_Scene_2;