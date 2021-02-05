var robber;
var security1,security2,security3;
var jewel,jewel1,jewel2,jewel3;
var laser,laser1,laser2,laser3,laser4,laser5,laser6,laser7i,laser7,laser8,laser9,laser10,laser11,laser12;
var atomBomb,atomBomb1,atomBomb2;
var thief1;
var gameState=0;



function preload(){
  thief1=loadImage("thiefRemoved.png");
  laser=loadImage("laserBeam.png");
  jewel1=loadImage("jewel.png");
  laser7i=loadImage("laserVert.png");
  atomBomb=loadImage("bullet.png");
}

function setup() {
  createCanvas(1500,925);
  
   robber=createSprite(100, 800, 50, 50);
   laser1=createSprite(400,700,900,30);
   laser2=createSprite(800,500,900,30);
   laser3=createSprite(1200,300,900,30);
   laser4=createSprite(600,600,900,30);
   laser5=createSprite(1000,400,900,30);
   
   jewel=createSprite(1400,200,50,50);
   
   


   robber.shapeColor=("black");
   laser1.shapeColor=("red");
   laser2.shapeColor=("red");
   laser3.shapeColor=("red");


  robber.addImage(thief1);
  laser1.addImage(laser);
  laser2.addImage(laser);
  laser3.addImage(laser);
  laser4.addImage(laser);
  laser5.addImage(laser);
  jewel.addImage(jewel1);
  

  laser1.scale=0.65;
  laser2.scale=0.65;
  laser3.scale=0.65;
  laser4.scale=0.65;
  laser5.scale=0.65;
  jewel.scale=0.65;
  
  
  robber.scale=0.25;

  laser1.debug=true;

  laser1.setCollider("circle",20,0,30);

  laser2.debug=true;

  laser2.setCollider("circle",20,0,30);

  laser3.debug=true;

  laser3.setCollider("circle",20,0,30);

  
  laser4.debug=true;

  laser4.setCollider("circle",20,0,30);

  laser5.debug=true;

  laser5.setCollider("circle",20,0,30);

  edges = createEdgeSprites();

  laser1.velocityX=10;
  laser2.velocityX=11;
  laser3.velocityX=12;
  laser4.velocityX=13;
  laser5.velocityX=14;

  
}

function draw() {
  background("grey"); 
  if(gameState===0){

  
  laser1.bounceOff(edges);
  laser2.bounceOff(edges);
  laser3.bounceOff(edges);
  laser4.bounceOff(edges);
  laser5.bounceOff(edges);
  if(keyDown(UP_ARROW)){
    robber.y-=10;
  }
  if(keyDown(DOWN_ARROW)){
    robber.y+=10;
  }
  if(keyDown(RIGHT_ARROW)) {
    robber.x+=10
  }
  if(keyDown(LEFT_ARROW)){
    robber.x-=10
  }
  if(robber.isTouching(laser1)||robber.isTouching(laser2)||robber.isTouching(laser3)||robber.isTouching(laser4)||robber.isTouching(laser5)){
    
   
     
    gameState=1;
    }
}
  if(gameState===1){
    stroke(0);
    fill(0);
    textSize(30);
    text("Thief is Caught",750,400);
    text("Press R to Restart!",50,50);

   laser1.velocityX=0;
   laser2.velocityX=0;
   laser3.velocityX=0;
   laser4.velocityX=0;
   laser5.velocityX=0;
   robber.velocityX=0;
   robber.velocityY=0;
  }
  if(robber.isTouching(jewel)){
    gameState=2;
   
  }
  if(gameState===2){
    
    
    laser1.destroy();
    laser2.destroy();
    laser3.destroy();
    laser4.destroy();
    laser5.destroy();
   
    jewel.destroy();
    level2();
  }
  if(keyDown("R")){
gameState=0;


  }


  drawSprites();
}
function level2(){
  background("yellow");
  robber.x=100;
  robber.y=100;
  edges=createEdgeSprites();
  if(keyDown("Q")){
    robber.y-=10;
  }
  if(keyDown(DOWN_ARROW)){
    robber.y+=10;
  }
  if(keyDown(RIGHT_ARROW)) {
    robber.x+=10
  }
  if(keyDown(LEFT_ARROW)){
    robber.x-=10
  }
  
  laser6=createSprite(400,100,50,50);
  laser7=createSprite(600,100,50,50);
  laser8=createSprite(1000,100,50,50);
  laser9=createSprite(1200,100,150,150);
  //laser10=createSprite(200,200,150,150);
 // laser11=createSprite(200,400,150,150);
 // laser12=createSprite(200,600,150,150);


atomBomb1=createSprite(100,0,50,100);
atomBomb2=createSprite(600,0,50,100);

 // laser10.addImage(laser);
 // laser11.addImage(laser);
 // laser12.addImage(laser);

  laser6.addImage(laser7i);
  laser7.addImage(laser7i);
  laser8.addImage(laser7i);
  laser9.addImage(laser7i);

  laser6.scale=2;
  laser7.scale=2;
  laser8.scale=2;

 // laser10.scale=0.5;
 // laser11.scale=0.5;
  //laser12.scale=0.5;
  
  //laser12.debug=true;
 // laser12.setCollider("circle",20,0,50);
 // laser11.setCollider("circle",20,0,50);
 // laser10.setCollider("circle",20,0,50);
  laser9.scale=2;

  laser6.bounceOff(edges);
  laser7.bounceOff(edges);
  laser8.bounceOff(edges);
  laser9.bounceOff(edges);
 // laser10.bounceOff(edges);
  //laser11.bounceOff(edges);
  //laser12.bounceOff(edges);

  atomBomb1.addImage(atomBomb);
  atomBomb2.addImage(atomBomb);

  atomBomb1.velocityX=10;
  atomBomb2.velocityX=10;
  atomBomb1.velocityY=10;
  atomBomb2.velocityY=10;

  atomBomb1.bounceOff(edges);
  atomBomb2.bounceOff(edges);

  jewel3=createSprite(1400,200,50,50);
  jewel3.addImage(jewel1);
  
  jewel2=createSprite(1400,700,50,50);
  jewel2.addImage(jewel1);

    laser6.velocityY=10;
    laser7.velocityY=11;
    laser8.velocityY=12;
    laser9.velocityY=13;


    if(keyDown("R")){
      gameState=0;
      
      
        }
   // laser10.velocityX=10;
   // laser11.velocityX=11;
   // laser12.velocityX=12;
    
    // if(robber.isTouching(laser6)||robber.isTouching(laser7)||robber.isTouching(laser8)||robber.isTouching(laser9)||robber.isTouching(laser10)||robber.isTouching(laser11)||robber.isTouching(laser12)||robber.isTouching(atomBomb1)||robber.isTouching(atomBomb2)){
     //  gameState=3;

   //  }
if(gameState===3){
  stroke(0);
    fill(0);
    textSize(30);
    text("Thief is Caught",750,400);
    text("Press R to Restart!",50,50);
    if(keyDown("R")){
      gameState=0;
      
      
        }
   laser6.velocityX=0;
   laser7.velocityX=0;
   laser8.velocityX=0;
   laser9.velocityX=0;
   laser10.velocityX=0;
   laser11.velocityX=0;
   laser12.velocityX=0;
   robber.velocityX=0;
   robber.velocityY=0;
}


  
}