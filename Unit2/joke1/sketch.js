let state = 0;
let font1 ;

function setup() {
  createCanvas(400, 400);
  font1 = loadFont("assets/Honey.otf") ;
  textSize(25)
}

function draw() {

  background(100);

  switch (state) {

    case 0:
      background("yellow") ;
      textFont(font1)
      text("I don't trust stairs.", 100, 100);
      break;

    case 1:
    background("orange")
    textFont(font1)
      text("why?", 100, 100);
      break;

    case 2:
    background("yellow")
    textFont(font1)
      text("They're always up to something.", 100, 100);
      break;

  }
}

function mouseReleased() {
  state++;
  if (state > 2) state = 0;

}
