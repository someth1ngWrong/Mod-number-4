let box = {
  x: 0,
  y: 0
}

let extraCanvas;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255,0);
  box.x = width / 2;
  box.y = height / 2;

}

function draw() {

  let mapX = map (mouseX, 0, width, -1.5, 1.5);
  let mapY = map (mouseY, 0, height, -1.5, 1.5);
  box.x = box.x + random(-2, 2) + mapX ;
  box.y = box.y + random(-2, 2) + mapY ;


  ellipse(box.x, box.y, 1, 1);

  if (mouseIsPressed) {
      fill(random(0,255),random(0,255),random(0,255));

  } else {
      fill(255);
      noStroke();

  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
