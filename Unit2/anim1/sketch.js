let x = 0 ;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  textSize(15);
}

function draw() {
  background("black");
  fill("white");
//  rect(x,height/2,10,50);
text("yoooo", x , 200);
  x = x + 7 ;
  if (x> width) {
    x = 0 ;
  }
}
