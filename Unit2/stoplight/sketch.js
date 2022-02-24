let state = 0
let timer = 0

function setup() {
  createCanvas(800, 800);
  rectMode(CENTER);
  ellipseMode(CENTER);
}

function draw() {

  background(100);
  fill('yellow');
  rect(width / 2, height / 2, 200, 700);


switch (state) {


  case 0: //red light
    fill('red');
    ellipse(width / 2, height / 2, 150, 150);
    fill('grey');
    ellipse(width / 2, height / 2 - 170, 150, 150);
    ellipse(width / 2, height / 2 + 170, 150, 150)
    break;

  case 1: //yellow light
    fill('yellow');
    ellipse(width / 2, height / 2, 150, 150);
    fill('grey');
    ellipse(width / 2, height / 2 - 170, 150, 150);
    ellipse(width / 2, height / 2 + 170, 150, 150)
    break;

  case 2: //green light
    fill('green');
    ellipse(width / 2, height / 2, 150, 150);
    ellipse(width / 2, height / 2 - 170, 150, 150);
    fill('grey');
    ellipse(width / 2, height / 2 + 170, 150, 150)
    break;
  }
  timer = timer + 1
  if (timer > 100) {
    timer = 0 ;
  }
  function mouseReleased() {
    state++;
    if (state > 2) state = 0;
  }
}
