function preload(){
  // put preload code here
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(51);
  angleMode(DEGREES);
  // How many times draw() runs every second?
  frameRate(20);
}

function draw() {

  //main artwork
  push();
  translate(width/2,height/2);
  rotate(frameCount);

  var a = sin(frameCount)*270;

  stroke(lerpColor(color('#F6B319'), color('#7DB912'), frameCount/200));
  strokeWeight(1);
  noFill();

  line(0, 0, 0, a);
  line(0, 0, -a, 0);
  line(0, 0, 0, -a);
  line(0, 0, a, 0);

pop();

//cute worms
  push();
  stroke(lerpColor(color('#F6B319'), color('#D63ED8'), frameCount/300));
  strokeWeight(2);
  noFill();
  translate(-10, height-300);
  rotate(-frameCount);
  translate(-frameCount+25,0);
  rotate(-frameCount);
  translate(-10,frameCount);
  rect(sin(-frameCount)*200, cos(-frameCount)*200, 60, 60, 20);
  pop();

  push();
  stroke(lerpColor(color('#F6B319'), color('#D63ED8'), frameCount/300));
  strokeWeight(2);
  noFill();
  translate(width-10, height/2+100);
  rotate(frameCount);
  translate(frameCount,0);
  rotate(frameCount);
  translate(-10,frameCount);
  rect(sin(frameCount)*200, cos(frameCount)*200, 60, 60, 20);
  pop();

if (frameCount == 270) {
  noLoop();
  frameCount=271;
}

}
