let state = 0;
let timer = 0;
let x = 0;
let velocity = 5 ;

function setup() {
  createCanvas(800, 800);
  rectMode(CENTER);
  ellipseMode(CENTER);
}

function draw() {

  background(100);
  fill('yellow');
  rect(width / 2, height / 2, 200, 700);

fill('orange');
rect(x,750,75,20);
x = x + velocity ;
if (x > width) {
  x = 0;
}


switch (state) {


  case 0: //red light
    fill('red');
    ellipse(width / 2, height / 2 - 170, 150, 150);
    fill('grey');
    ellipse(width / 2, height / 2, 150, 150);
    ellipse(width / 2, height / 2 + 170, 150, 150)
    velocity = 0;
    break;

  case 1: //yellow light
    fill('grey');
    ellipse(width / 2, height / 2 - 170, 150, 150);
    ellipse(width / 2, height / 2, 150, 150);
    fill('green');
    ellipse(width / 2, height / 2 + 170, 150, 150)
    velocity = 5;
    break;

  case 2: //green light
    fill('grey');
    ellipse(width / 2, height / 2 - 170, 150, 150);
    fill('yellow');
    ellipse(width / 2, height / 2, 150, 150);
    fill('grey');
    ellipse(width / 2, height / 2 + 170, 150, 150)
    velocity = 2.5;
    break;
  }

timer = timer + 1 ;
if (timer > 100) {
  timer = 0;
  state ++;
  if (state > 2) state = 0;
}

}
  function mouseReleased() {
    state ++;
    if (state > 2) state = 0;
  }
