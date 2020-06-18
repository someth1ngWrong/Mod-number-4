




let extraCanvas
function setup() {
  createCanvas(windowWidth, windowHeight);
    background(255,0);
  extraCanvas = createGraphics(width, height)
  extraCanvas.clear()
}

function draw() {

  stroke(random(3, 3))
  ellipse(mouseX, mouseY, width/100, height/300)
  stroke(random(50))
  line(mouseX, mouseY, width/100, height/300)

  image(extraCanvas, 0, 0)
}
