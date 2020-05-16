let radius;

function setup() {

  createCanvas(windowWidth, windowHeight);
  background(20, 20, 20);

}

function draw() {

  let phi_1 = random(0, 2*PI);
  let phi_2 = random(0, 2*PI);

  radius = Math.sqrt(width*width + height*height);

  let page_center_x = width/2;
  let page_center_y = height/2;

  let x1 = page_center_x + radius*cos(phi_1);
  let y1 = page_center_y + radius*sin(phi_1);

  let x2 = page_center_x + radius*cos(phi_2);
  let y2 = page_center_y + radius*sin(phi_2);

  let stroke_alpha = 15;

  if (mouseIsPressed) {
    stroke_alpha = 150;
  }

  stroke(random(130, 255), random(130, 255), random(130, 255), stroke_alpha);
  line(x1, y1, x2, y2);

}

function windowResized() {

  resizeCanvas(windowWidth, windowHeight);
  background(20, 20, 20);
  radius = Math.sqrt(width*width + height*height);

}
