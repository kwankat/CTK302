let state = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {

  background(100);

  switch (state) {

    case 0:
      background("yellow") ;
      text("I don't trust stairs.", 100, 100);
      break;

    case 1:
    background("orange")
      text("why?", 100, 100);
      break;

    case 2:
    background("yellow")
      text("They're always up to something.", 100, 100);
      break;

  }
}

function mouseReleased() {
  state++;
  if (state > 2) state = 0;

}
