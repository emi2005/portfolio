
hockey part 2
by emilie
  

 
//click on the hockey puck until it is completely in the goal 
// click on the space bar to reset the hockey puck at its original position 
​
​
let bg;
let circleX, circleY;
let circleSize = 100;
let circleStartX, circleStartY;
​
function preload() {
  bg = loadImage("but.jpeg");
}
​
function setup() {
  createCanvas(2500, 1200);
  circleStartX = width / 2; // save the starting position of the circle
  circleStartY = height / 2;
  circleX = circleStartX;  // initialize circle position to starting position
  circleY = circleStartY;
}
​
function draw() {
  // draw the background image
  image(bg, 800, 200);
​
  // draw the brown circle (the hockey puck)
  fill(51, 25, 0);
  noStroke();
  circle(circleX, circleY, circleSize);
}
​
function mousePressed() {
  // check if the mouse is inside the circle
  let d = dist(mouseX, mouseY, circleX, circleY);
  if (d < circleSize / 2) {
    // move the circle to a random position
    circleX = random(800 + circleSize / 2, 800 + bg.width - circleSize / 2);
    circleY = random(200 + circleSize / 2, 200 + bg.height - circleSize / 2);
  }
}
​
function keyPressed() {
  // check if space key is pressed
  if (keyCode === 32) {
    // reset circle position to starting position
    circleX = circleStartX;
    circleY = circleStartY;
  }
}
SKETCH
FILES
EDITOR
Select mode or a template 

Write step-by-step tutorials. Learn more

Centers sketch and matches the background color.

Prevents infinite loops that may freeze the sketch.
p5.sound
OP Configurator 3000
Join Plus+ for private sketches, version history, custom embeds, and more!
