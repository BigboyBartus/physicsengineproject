
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var backgroundImg;
var mouseImg
var catImg
var cheeseImg
var gameState="play"
var count=0
function preload(){
backgroundImg=loadImage("backgroud.Jpg")
  mouseImg=loadImage("mouseit.png")
  catImg=loadImage("catit.png")
  cheeseImg=loadImage("cheeseit.png")

  emptystars = loadAnimation("empty.png")
 onestars = loadAnimation("one_star.png")
 twostar = loadAnimation("stars.png")
}

function setup() {
  createCanvas(1000,400);

  engine = Engine.create();
  world = engine.world;
  mouse=createSprite(200,200,50,50)
  mouse.addImage(mouseImg)
  mouse.scale=0.02
  cat=createSprite(300,300,40,40)
  cat.addImage(catImg)
  cat.scale=0.3
  
    
    
    cheese=createSprite(random(100,900),random(50,350))
    cheese.addImage(cheeseImg)
    cheese.scale=0.2
    cheese2=createSprite(random(100,900),random(50,350))
    cheese2.addImage(cheeseImg)
    cheese2.scale=0.2
    cheese3=createSprite(random(100,900),random(50,350))
    cheese3.addImage(cheeseImg)
    cheese3.scale=0.2
    cheese4=createSprite(random(100,900),random(50,350))
    cheese4.addImage(cheeseImg)
    cheese4.scale=0.2

    twostars=createSprite(50,20,20)
twostars.addAnimation('empty',emptystars)
twostars.addAnimation('one',onestars)
twostars.addAnimation('two',twostar)
twostars.changeAnimation('empty')
twostars.scale=0.2

  

}


function draw() 
{
  background(51);
  image(backgroundImg,0,0,1000,400)
  Engine.update(engine);
  if(gameState==="play"){

  
  if (keyDown(UP_ARROW)&&mouse.y>5){
    mouse.y=mouse.y-5
  }
  if (keyDown(DOWN_ARROW)&&mouse.y<390){
    mouse.y=mouse.y+5
  }
  if (keyDown(LEFT_ARROW)&&mouse.x>10){
    mouse.x=mouse.x-5
  }
  if (keyDown(RIGHT_ARROW)&&mouse.x<990){
    mouse.x=mouse.x+5
  }
  
  if(cat.isTouching(mouse)){
    gameState="end"
  }
  drawSprites()
  if (frameCount%40===0){

  
  xPosition=random(100,900)
  yPosition=random(100,350)
  cat.x=xPosition
  cat.y=yPosition
  }
  if(mouse.isTouching(cheese)){
    cheese.destroy()
    count=count+1
  }
  if(mouse.isTouching(cheese2)){
    cheese2.destroy()
    count=count+1
  }
  if(mouse.isTouching(cheese3)){
    cheese3.destroy()
    count=count+1
  }
  if(mouse.isTouching(cheese4)){
    cheese4.destroy()
    count=count+1
  }
  if(count==2){
    twostars.changeAnimation('one')
  }
  if(count==4){
    twostars.changeAnimation('two')
    background("black")
    textSize(30)
    text("You won!",400,200)
  }
  
}
else if(gameState=="end"){
  background("black")
textSize(30)
text("The cat ate you!",400,200)
}
}

function keyPressed(){
  if(keyIsDown(UP_ARROW)){
    Matter.Body.setVelocity(mouse,{x:0,y:0.05})
    
    
  }
  
}