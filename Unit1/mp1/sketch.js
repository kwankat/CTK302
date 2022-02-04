function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  textSize(27);
}

function draw() {
  noStroke();
  if (mouseIsPressed) {
    background("grey");
    fill("white");
    text("but they sure had a dark past...", 10, 30);
    fill("black");
    circle(width / 2, height / 2, 200);
    rect(width / 2, height / 1, 100, 200);
    triangle(400, 55, 200, 100, 200, 300);
    triangle(0, 55, 200, 100, 200, 300);

    fill("red");
    circle(155, 200, 50);
    circle(250, 200, 50);

    fill("black");
    arc(0, 450, 500, 800, 150, TWO_PI);
    triangle(400, 450, 400, 800, 150, 200);
  } else {
    background("orange");
    text("king was a mighty ruler", 10, 30);
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
}
