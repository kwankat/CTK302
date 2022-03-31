let cars = [];
let frogPos;
let state = 0;
let timer = 0;
let maxCars = 30;
let maxTimer = 15 ;
let score = 0 ;
let kitty;
let net;
let grass;

function setup() {
  createCanvas(windowWidth, windowHeight);

 kitty = loadImage("images/cat.png");
 net = loadImage("images/net.png");
 grass = loadImage("image/grass.jpg")

  // Spawn objects
  for (let i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }

  frogPos = createVector(width / 2, height - 100);
}

function draw() {
  switch (state) {
    case 0:
      background("yellow");
      text("KITTY COLLECTOR! COLLECT ALL THE CATS BEFORE THE TIME RUNS OUT!", 100, 100);
      break;

    case 1:
      game();
      timer++;
      if (timer > maxTimer * 60) {
        timer = 0;
        state = 3;
      }
      break;

    case 2: // win!
      background("yellow");
      text("YOUVE COLLECTED ALL THE KITTYS!", 100, 100);
      break;

    case 3: // lose
      background("grey");
      text("OH NO THE KITTYS HAVE ESCAPED! :( Try again!", 100, 100);
      break;
  }

    fill("black") ;
  textSize(24) ;
  text("score = "+ score, 30, 30) ;
}

function game() {
  background("green");
  image(grass, windowWidth,windowHeight);


  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();

    if (cars[i].pos.dist(frogPos) < 50) {
      cars.splice(i, 1);
      score++ ;
    }
  }

  if (cars.length == 0) {
    // they won!
    state = 2;
  }

  // frog
image(net,frogPos.x, frogPos.y, 50, 50);
  checkForKeys();


}

class Car {
  // constructor and attributes
  constructor() {
    this.pos = createVector(random(width), random(height)); // initialize your attributes here
    this.v = createVector(random(6), 0);
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    this.o = random(100);
    this.size = random(48, 128);
  }

  // methods

  display() {
    fill(this.r, this.b, this.g, this.o);
    image(kitty,this.pos.x, this.pos.y, 75, 25);

    // textSize(this.size) ;
    // text("bruh", this.pos.x, this.pos.y) ;
  }

  move() {
    this.pos.add(this.v);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }
}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) {
    frogPos.x -= 5;
    if (frogPos.x < 0) frogPos.x = width ;
  }

  if (keyIsDown(RIGHT_ARROW)) frogPos.x += 5 ;
  if (keyIsDown(UP_ARROW)) frogPos.y -= 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y += 5;
}

function mouseReleased() {
  switch (state) {
    case 0:
      state = 1;
      break;

    case 2: // win state
      resetTheGame();
      state = 0;

      break;

    case 3: // lose state
      resetTheGame();
      state = 0;
      break;
  }
}

function resetTheGame() {
  timer = 0;
  cars = [];
  score = 0;

  // Spawn objects
  for (let i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }
}
