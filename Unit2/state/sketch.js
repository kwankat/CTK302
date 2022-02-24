let state = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {

  background(100);

  switch (state) {

    case 0:
      background("yellow");
      text("0", 100, 100);
      for (let j = 0; j < 20; j++) {
        for (let i = 0; i < 20; i++) {
          rect(i * 20, j * 60, 15, 12);
        }
      }
      break;

    case 1:
    background("orange");
      text("1", 100, 100);
      for (let j = 0; j < 20; j++) {
        for (let i = 0; i < 20; i++) {
          ellipse(i * 25, j * 30, 15, 15)
        }
      }
      break;

    case 2:
    background("red");
      text("2", 100, 100);
      for (let j = 0; j < 20; j++) {
        for (let i = 0; i < 20; i++) {
          triangle(i * 30, j * 22, 12, 12)
        }
      }
      break;

    case 3:
    background("blue");
      text("3", 100, 100);
      for (let j = 0; j < 20; j++) {
        for (let i = 0; i < 20; i++) {
          ellipse(i * 20, j * 25, 25, 25)
        }
      }
      break;

    case 4:
    background("black");
      text("4", 100, 100);
      for (let j = 0; j < 20; j++) {
        for (let i = 0; i < 20; i++) {
          rect(i * 60, j * 62, 20, 35)
        }
      }
      break;

  }
}

function mouseReleased() {
  state++;
  if (state > 4) state = 0;

}
