function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
}



function draw() {

 if (mouseIsPressed) {
    background('blue');
  } else {
    background("yellow");
  }

  rect(width/2, height/2, 200, 100);

}
