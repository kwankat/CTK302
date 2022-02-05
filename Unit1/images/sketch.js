let kieth;
let owo;
let raccoon;


function setup() {
  createCanvas(500, 500);

kieth = loadImage("assets/kieth.jpg");
owo = loadImage("assets/owo.jpg");
raccoon = loadImage("assets/raccoon.jpg")

}

function draw() {
  image(kieth, width/2, 400, 100, 100);
  image(owo, width/2, 300, 100, 100);
  image(raccoon, width/2, 200, 100, 100);
}
