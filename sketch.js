var ape, apeIMG;
var Aptree, appleIMG;


function preload(){
//load images 
apeIMG = loadImage("images/ape.png");
appleIMG = loadImage("images/apple.png");

}


function setup() {
  createCanvas(windowWidth,windowHeight);
  //create ape (pc)
ape = createSprite(windowWidth/2,windowHeight/2);
ape.addImage(apeIMG);
//create spritess (apples)
Aptree = createSprite(windowWidth/2 + 650, windowHeight/2 - 380,100,100);

apple = new Apples(windowWidth/2 + 650, windowHeight/2 - 380);


}

function draw() {
  background("black");

 //movement of ape 
 if (keyIsDown(UP_ARROW)) {

ape.y = ape.y - 3 ;

 }
 
 if(keyIsDown(DOWN_ARROW)){

  ape.y = ape.y + 3 ;

 }
 
 if(keyIsDown(RIGHT_ARROW)){

ape.x = ape.x + 3;

 }
 
 if(keyIsDown(LEFT_ARROW)){

  ape.x = ape.x - 3;
  
   }

 
  drawSprites();







}