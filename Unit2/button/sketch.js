let state = 0;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER, CENTER);
}

function draw() {

  background(100);

  switch (state) {

    case 0:
      background("yellow");
      text("I don't trust stairs.", 50, 100);
      break;

    case 1:
      background("orange")
      text("why?", 100, 100);
      break;

    case 2:
      background("yellow")
      text("They're always up to something.", 50, 100);
      break;

  }
  push();
  fill("red");
  rect(100, 100, 100, 100, 100);
  pull();
}


}
