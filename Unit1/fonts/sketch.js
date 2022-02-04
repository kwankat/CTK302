let font1, font2 ;
function setup() {
  createCanvas(500,500);
  font1 = loadFont("assets/Athletic.ttf") ;
  font2 = loadFont("assets/Honey.otf") ;

  textAlign(CENTER) ;
  angleMode(DEGREES) ;
}

function draw() {
  background(75) ;

  textSize(75) ;
  textFont(font1) ;
  push() ;
  translate(width/2, height/2) ;
  rotate(55) ;
  text("happy days",0,0) ;

  textFont(font2) ;
  text("Smile :)", width/2,25) ;
  pop() ;
}
