let radius;

function setup() {

  createCanvas(windowWidth, windowHeight);
  background(20, 20, 20);

}

function draw() {

  radius = 3*min(width, height);

  let angle1 = random(0, 2*PI);
  let angle2 = random(0, 2*PI);

  let xpos1 = width/2 + radius*cos(angle1);
  let xpos2 = width/2 + radius*cos(angle2);

  let ypos1 = height/2 + radius*sin(angle1);
  let ypos2 = height/2 + radius*sin(angle2);

  let stroke_alpha = 15;

  if (mouseIsPressed) {
    stroke_alpha = 150;
  }

  stroke(random(130, 255), random(130, 255), random(130, 255), stroke_alpha);
  line(xpos1, ypos1, xpos2, ypos2);

}

function windowResized() {

  resizeCanvas(windowWidth, windowHeight);
  radius = 3*min(width, height);
  background(20, 20, 20);

}
