var bg,bg2,form,system,code,security;
var score=0;
var bg3 , bg4 ;

function preload() {
 
  
  bg= loadImage("download.jpg")
  //load image for the treasure background
  bg2= loadImage("treasure.jpg")
  bg3= loadImage("images.jpg")

}

function setup() {
  createCanvas(1000,500);
  security = new Security();
  system = new System();
  background(bg)
    
}

function draw() {
  security.display();
  
// add code for changing the background to the treasure background
  

  if(score === 10) {
    clear()
    background(bg2)
    fill("black")
    textSize(40);
    text(" YOU WIN ",250, 300);
  }

  drawSprites()
 
}