let x = 0 ;
let font1 ;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  font1 = loadFont("assets/Athletic.ttf") ;
  textSize(35);
}

function draw() {
  background("black");
  fill("white");
//  rect(x,height/2,10,50);
textFont(font1) ;
push() ;
text("yoooo", x , 200);
  x = x + 7 ;
  if (x> width) {
    x = 0 ;
      pop() ;
  }
}
