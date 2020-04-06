
var r = 0;
var g = 50;
var b=255;

function setup(){

  createCanvas(1200,400);
}


function draw(){
  r = map(mouseX,0,800,0,250);
  g = map(mouseX,50,700,0,150);
  b = map(mouseX,0,800,245,20);

  background(r,g,b);

  fill(255);

  ellipse(mouseX,200,30,30);

  

  drawSprites();
}