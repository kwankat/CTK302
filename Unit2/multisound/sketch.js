let state = 0;
let song1, song2, song3;

function preload() {
  song1 = loadSound("music/song1.mp3");
  song2 = loadSound("music/song2.mp3");
  song3 = loadSound("music/song3.mp3");
}

function setup() {
  createCanvas(500, 500)
}

function draw() {

  switch (state) {
    case :0
    song1.play();
    state = 1;
    break;

    case :1
    background('red');
    text("listening to some sick beats", 200, 200)
    break;

    case :2
    break;

    case :3
    break;

    case :4
    break;

  }
}

function mouseReleased() {
  state = (state + 1) % 6;
  song1.pause();
  song2.pause();
  song3.pause();
}
