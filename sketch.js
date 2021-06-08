var bg,tom1Img,jerry1Img,tom2Img,tom3Img,jerry2Img,jerry3Img
function preload() {
    //load the images here
 bg   =loadImage("images/garden.png")
 tom1Img   =loadImage("images/cat1.png")
 tom2Img =loadImage("images/cat2.png","images/cat3.png")
 tom3Img   =loadImage("images/cat4.png")
 
 jerry1Img =loadImage("images/mouse1.png")
 jerry2Img  =loadImage("images/mouse2.png","images/mouse3.png")
 jerry3Img   =loadImage("images/mouse4.png")
 

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
tom =createSprite(880,600)
tom.addAnimation("sitting",tom1Img)
tom.scale=0.2

jerry=createSprite(150,600)
jerry.addAnimation("standing",jerry1Img)
jerry.scale=0.10
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide

    if(tom.x - jerry.x < (tom.width - jerry.width)/2)
    { 
        tom.velocityX=0;
        tom.addAnimation("tomthirdImg", tom3Img);
        tom.x =300;
        
        tom.changeAnimation("tomthirdImg");
        jerry.addAnimation("jerrythirdImg", jerry3Img);
        jerry.scale=0.15;
        jerry.changeAnimation("jerrythirdImg");
    }  
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
tom.addAnimation("tom running", tom2Img)
tom.changeAnimation("tom running")
tom.velocityX =-4
jerry.addAnimation("jerrylaughing", jerry2Img)
jerry.changeAnimation("jerrylaughing")
jerry.frameDelay= 25;


}

}
