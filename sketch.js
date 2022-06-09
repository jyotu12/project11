var path,pathimage;
var runninganimation;
function preload(){
  //pre-load images
  pathimage=loadImage("path.png")
  runninganimation("runner-1.png","runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprites(200,200,400,400)
  path.addImage("path",pathimage)
  path.scale=1.2
  path.velocityY=4
  runninganimation=createSprites(100,200,10,10)
  runninganimation.addAnimation(runninganimation)
  runninganimation.scale=0.1



}

function draw() {
  background(0);
  if (path.y>400) {
    path.y=height/2
  }
  
  drawSprites()
  
  

  }


