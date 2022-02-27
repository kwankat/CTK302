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
        background("red") ;
        for (let j = 0; j < 20; j++) {
          for (let i = 0; i < 20; i++) {
            rect(i * 20, j * 60, 15, 12);
          }
        }
        break;

      case 1:
      background("orange")
      for (let j = 0; j < 20; j++) {
        for (let i = 0; i < 20; i++) {
          triangle(i * 40, j * 30, 16, 12);
        }
      }
        break;

      case 2:
      background("yellow")
      for (let j = 0; j < 20; j++) {
        for (let i = 0; i < 20; i++) {
          circle(i * 20, j * 54, 25, 12);
        }
      }
        break;

          }
        }
