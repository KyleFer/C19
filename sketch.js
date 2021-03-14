var gameState="play"

var towerImg, tower
var climberImg, climber
var ghost, ghostImg
var doorImg, door, doorsGroup



function preload(){
  towerImg=loadImage("tower.png")
  climberImg=loadImage("climber.png")
  ghostImg=loadImage("ghost-standing.png")
  doorImg=loadImage("door.png")
}

function setup(){
createCanvas(600,600)
  
tower= createSprite(300,300)
tower.addImage(towerImg)
tower.velocityY=1
  
ghost= createSprite(200,200,50,50)
ghost.addImage(ghostImg)
ghost.scale=0.4
  
  
  doorsGroup= new Group
  climbersGroup= new Group

  
}

function draw(){
  background("white")
  
  if(tower.y>400){
    tower.y=300
  }
  
  if(gameState==="play"){
    
  if(keyDown("space")){
    ghost.velocityY=-8
  }
  ghost.velocityY=ghost.velocityY+0.8
  
  if(keyDown("left_arrow")){
    ghost.x=ghost.x-3 
  }
  
  if(keyDown("right_arrow")){
    ghost.x=ghost.x+3
  }
  
  if(climbersGroup.isTouching(ghost)){
    ghost.velocityY=0
    
  }
  
  if(ghost.y>600){
    ghost.destroy()
    gameState="end"
  }
  
  spawnDoors()
  drawSprites()
  }
  
  if(gameState==="end"){
    text("game over",230,250)
  }
}

function spawnDoors(){
if(frameCount% 200===0){
  door= createSprite(200,-50)
door.addImage(doorImg)
  
climber= createSprite(200,10)
climber.addImage(climberImg)

door.x=Math.round(random(120,400))
door.velocityY=1

climber.x=door.x
climber.velocityY=1

climber.lifetime=600
door.lifetime=600
doorsGroup.add(door)
climbersGroup.add(climber)
  
ghost.depth=door.depth
ghost.depth+=1


  
}
  
}