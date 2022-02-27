let x = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("orange");

  push();
  translate(x, 0, [5]);
  avatar();
  x += 5;
  if (x > width) {
    x = 40
  }

  pop();
}

function avatar() {
  noStroke();
  fill(0, 102, 153);
  fill("white");
  circle(width / 2, height / 2, 200);
  rect(width / 2, height / 1, 100, 200);
  triangle(400, 55, 200, 100, 200, 300);
  triangle(0, 55, 200, 100, 200, 300);

  fill("black");
  circle(155, 200, 50);
  circle(250, 200, 50);

  fill("white");
  arc(200, 200, 280, 280, PI, TWO_PI);
  arc(0, 450, 500, 800, 150, TWO_PI);
  triangle(400, 450, 400, 800, 150, 200);
}
