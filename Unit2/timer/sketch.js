let state = 0;
let timer = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {

  background(100);

switch (state) {

	case 0:
	background('white');
	text("case 0", 250, 250);

// timer code
  timer++;
  if (timer > 3*60) {
    timer = 0;
    state = 1;
  }
	break;

 	case 1:
	background('grey');
	text("case 1", 250, 250);

  timer++;
  if (timer > 3*60) {
    timer = 0;
    state = 1;
  }
	break;

case 2:
	background('pink');
	text("case 2", 250, 250);
  timer++;
  if (timer > 3*60) {
    timer = 0;
    state = 1;
  }
	break;
}
