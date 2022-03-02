let button;
function setup() {
  createCanvas(500, 500);
  background(0);
  button = createButton('click me');
  button.position(200, 200);
  button.mousePressed(changeBG);
}

function changeBG() {
  let val = random(356);
  background(val);
}
