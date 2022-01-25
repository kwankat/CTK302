let kieth;
let owo;
let raccoon;


function setup() {
  createCanvas(500, 500);

kieth = loadImage("assets/kieth.png");
owo = loadImage("assets/owo.png");
raccoon = loadImage("assets/raccoon n possum.jpg")

}

function draw() {
  image(kieth, width/2, 100, 100, 100);
  image(owo, width/2, 100, 100, 100);
  image(raccoon, width/2, 100, 100, 100);
}
