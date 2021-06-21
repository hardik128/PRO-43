var bg,bg2,form,system,code,security;
var score=0;

function preload() {
 
  
  bg=loadImage("aladdin_cave.jpg")
  bg2=loadImage("aladdin_cave2.jpg")
  bg3=loadImage("treasure.jpg")
  
}

function setup() {
  createCanvas(1000,500);
  system = new System();
  security = new Security();
  
  
  
  
}

function draw() {
  background(bg);
  clues();
  security.display();
  stroke(0)
  strokeWeight(5)
  textSize(40);
  fill(10,200,20);
  text("Score: " + score, 150, 50);

  

  if(score === 3) {
    clear();
    background(bg3)
    fill("black")
    textSize(40);
    text("TREASURE UNLOCKED",250, 200);
  }

 

  drawSprites()
}