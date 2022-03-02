let state = 0;
let song1, song2, song3;

function preload() {
  song1 = loadSound("music/song1.mp3");
  song2 = loadSound("music/song2.mp3");
  song3 = loadSound("music/song3.mp3");

  song1. loop();
  song1. pause();
  song2. loop();
  song2. pause();
  song3. loop();
  song3. pause();

}

function setup() {
  createCanvas(500, 500)

}

function draw() {

  switch (state) {
    case 0:
    background('red');
    song1.play();
    state = 1;
    break;

    case 1:
    background('red');
    text("listening to some sick beats", 200, 200);
    break;

    case 2:
    background('orange');
    text("NICE", 200, 200);
    song2.play();
    state = 3 ;
    break;

    case 3:
    background('orange');
    text("JAMMIN", 200, 200);

    break;

    case 4:
    background('pink');
    song3.play();
    state = 5;
    break;

    case 5:
    background('pink');
    text("CATJAM", 200, 200);
    break;

  }
}

function mouseReleased() {
  song1.pause();
  song2.pause();
  song3.pause();

  state++;
  if(state > 5) state = 0;
}
