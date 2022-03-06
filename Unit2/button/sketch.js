let myState = 0;
function setup() {
  createCanvas(500,500);
  textAlign(CENTER);
  rectMode(CENTER);
}

function draw() {

switch (myState) {
  case 0:
  background('black');
  fill('white');
  textSize(48);
  text("I don't trust stairs.", width/2, height/2);
  break;

  case 1:
  background('white');
  fill('black');
  textSize(30);
  text("They're always up to something.", width/2, height/2)
  break;

}

fill("grey");
rect(100,100,100,100);

}

function mouseReleased() {

  if ((mouseX > 100) && (mouseX < 200) && (mouseY > 100) && (mouseY < 200)) {
myState++ ;
if (myState > 1) myState = 0;
}
}
