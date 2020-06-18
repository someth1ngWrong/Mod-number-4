let count
let speed
let dots = []
let cellSize = 100
function setup() {
  let cnv = createCanvas(windowWidth, windowHeight, WEBGL)


  frameRate(20)

  let xCellsCount = width / cellSize
  let yCellsCount = height / cellSize

  count = xCellsCount * yCellsCount
  for (let yCount = 0; yCount < yCellsCount; yCount++) {
    for (let xCount = 0; xCount < xCellsCount; xCount++) {
      dots.push(createDot({
        xCount: xCount,
        yCount: yCount
      }))
    }
  }
}

function draw() {
  background(255,0);
  for (let i = 0; i < count; i++) {
    dots[i].move()
      rotateZ(frameCount* 0.1)
  rotateX(frameCount* 0.1)
  rotateY(frameCount* 0.01)
    dots[i].display()
  }
}

function createDot({
  xCount,
  yCount,
  d = 1,
  speed = random(0.1,0.2)

}) {

  let paddingX = cellSize / 2
  let paddingY = cellSize / 2
  let directionX = 1
  let directionY = 1

  return {
    move() {
      paddingX = paddingX + speed * directionX
      if (paddingX > cellSize || paddingX < 0) {
        directionX *= -1
        paddingY = paddingY + speed * directionY
      }

      if (paddingY > cellSize || paddingY < 0) {
        directionY *= -1
        paddingY = paddingY + speed * directionY
      }
    },
    display() {
      let x = xCount * cellSize + paddingX
      let y = yCount * cellSize + paddingY
      ellipse(x, y, d)


      stroke(150)
      line(width,height,x, y)
    }
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight)
}


//------------------

// var frmes = 20,
//   num = 100,
//   sz = 2,
//   theta = 1;
// var r, d, x, offSet;
//
// function setup() {
//   createCanvas(windowHeight, windowHeight);
//   noStroke();
// }
//
// function draw() {
//   randomSeed(200);
//   background(0,0);
//   fill(255);
//   r = 0;
//   noStroke();
//   fill(255, 150);
//   for (var i = 0; i <= num; i++) {
//     offSet = random(0,10) / num * i;
//     push();
//     translate(width, height / 2);
//     rotate(r);
//     d = map(sin(theta - offSet * 6), -1, 1, 20, 80);
//     for (var j = 0; j < 50; j++) {
//       x = random(200, 1000);
//       ellipse(x + d, 10, sz, sz);
//     }
//     r += random(0,10) / num;
//     pop();
//   }
// }
//
// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }




//-----------------------------------------------

// let extraCanvas
// function setup() {
//   createCanvas(windowWidth, windowHeight);
//     background(255,0);
//   extraCanvas = createGraphics(width, height)
//   extraCanvas.clear()
// }
//
// function draw() {
//
//   stroke(random(3, 3))
//   ellipse(mouseX, mouseY, width/100, height/300)
//   stroke(random(50))
//   line(mouseX, mouseY, width/100, height/300)
//
//   image(extraCanvas, 0, 0)
// }


// -------------------------------------
// let box = {
//   x: 0,
//   y: 0
// }

// let extraCanvas;

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   background(255,0);
//   box.x = width / 2;
//   box.y = height / 2;
//
// }



// function draw() {
//
//   let mapX = map (mouseX, 0, width, -1.5, 1.5);
//   let mapY = map (mouseY, 0, height, -1.5, 1.5);
//   box.x = box.x + random(-2, 2) + mapX ;
//   box.y = box.y + random(-2, 2) + mapY ;
//
//
//   ellipse(box.x, box.y, 1, 1);
//
//   if (mouseIsPressed) {
//       fill(random(0,255),random(0,255),random(0,255));
//
//   } else {
//       fill(255);
//       noStroke();
//
//   }
// }

// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }
