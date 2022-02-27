let state = 0;
let timer = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {

timer++ ;
if (timer > 2*60) {
  timer = 0 ;
  state = (state + 1) % 3;
}

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
