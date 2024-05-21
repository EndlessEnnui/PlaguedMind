let bubbles = [];
let canvas;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style("z-index, -2");
  background(255);


  for (let i = 0; i < 1000; i++){
    let x = random(width);
    let y = random(height);
    let r = random(10, 40);
     bubbles[i] = new Bubble(x, y, r);
  }
  
  

}

function draw() {
  background(0);
  for (let i = 0; i < bubbles.length; i++){
      bubbles[i].move();
    bubbles[i].show();
  }


  
  
}

class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  move() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }

  show() {
    noStroke();
    fill(25, 25, 25, 500);
    ellipse(this.x, this.y, this.r * 2);
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}