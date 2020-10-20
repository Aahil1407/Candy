var ball , ballImg
var background , backgroundImg
var candygroup , candy1 , candy2 , candy3
var board , boardImg

function preload(){

 ballImg=loadImage("gameball.png")
 candy1=loadImage("popcandy.png")
 candy2=loadImage("spicandy.png")
 candy3=loadImage("xmascandy.png")
 boardImg=loadImage("board.png")
 backgroundImg=loadImage("background.png")
}

function setup(){
  createCanvas(displayWidth-30,displayHeight-10)
  background = createSprite(0,0,displayWidth-30,displayHeight-10)
  ball = createSprite(displayWidth/2 , displayHeight-30,50 , 40)

}
function draw (){

  drawSprites()
}