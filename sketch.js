var mario,background,backgroundimg,marioimg,obstacle1,obstacle2,mario_running
var PLAY=1
var END=0
var gameState=PLAY

function preload(){
  mario_running =   loadAnimation("images/mario00.png","images/mario01.png","images/mario02.png","images/mario03.png");
  
  backgroundimg = loadImage("images/bg.png");  
  obstacle1 = loadImage("images/obstacle1.png");
  obstacle2 = loadImage("images/obstacle2.png");
  groundimg=loadImage("images/bg.png");
  ground2img=loadImage("images/ground.png")
}

function setup() {
  createCanvas(600,350);
  ground=createSprite(200,330,400,20)
  ground.addImage(ground2img);
  ground.velocityX=-4;
  ground.x=ground.width/2
  ground.scale=2
  mario=createSprite(100,230,20,50)
  mario.addAnimation("R1",mario_running)
  mario.scale=2;
  obstacleGroup=new Group()
  invisibleGround=createSprite(200, 300,400,10)
  invisibleGround.visible=false

  
}

function draw() {
  background(255,255,255);
  
  if(gameState==PLAY){
    ground.velocityX=-4
  if(ground.x<0){
      ground.x=ground.width/2
    }  
  if(keyDown("space")){
    
    mario.velocityY=-10
    
  }
  mario.velocityY=mario.velocityY+0.5
  mario.collide( invisibleGround)
  }


  spawnObstacle();
  drawSprites();
}
 function spawnObstacle(){
   if(frameCount % 60===0){
   var obstacle=createSprite(600,250,10,10)
   obstacle.velocityX=-6
   var rand=Math.round(random(1,2))
   switch(rand){
     case 1:obstacle.addImage(obstacle1)
    break;
    case 2:obstacle.addImage(obstacle2)
    break;
    default: break;
   }
   obstacle.scale=0.5
 }
}









