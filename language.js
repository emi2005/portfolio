// Emilie Ratelle 
// Nicholas Brown
// Web and Effects, section 1
// Hockey practice
// https://openprocessing.org/sketch/1881800 
/* (Instruction)
//click on the puck with the mouse to make the puck moves/ to make your slap-shot. 
// when the puck enters the goal, click on the press bar to resest the puck to its original postiton, and to add a point to the counter on the right corner. 
(Analysis/artist statement)
My interaction is about a hockey player who is practising his slap shot for his hockey game. He counts the number of time he scores to help him be better. My interaction is about perseverance, and patience. Two thighs you need to be a good hockey player!
*/



let bg;
let circleX, circleY;
let circleSize = 100;
let circleStartX, circleStartY;
let newImage;
let newImageSize = 500;
let counter = 0; // initialize counter to 0

function preload() {
  bg = loadImage("but.jpeg");
  newImage = loadImage("stick.webp");
}

function setup() {
  createCanvas(2000, 1000);
  circleStartX = width / 2; 
  circleStartY = height / 2;
  circleX = circleStartX; 
  circleY = circleStartY;
}

function draw() {
  image(bg, 0, 0, width, height);
  fill(51, 25, 0);
  noStroke();
  circle(circleX, circleY, circleSize);
  image(newImage, mouseX, mouseY, newImageSize, newImageSize);

  // display the counter value in the top-right corner
  textSize(60);
  textAlign(RIGHT, TOP);
  fill(0);
  text("Count: " + counter, width - 20, 20);
}

function mousePressed() {
  let d = dist(mouseX, mouseY, circleX, circleY);
  if (d < circleSize / 2) {
    circleX = random(circleSize / 2, width - circleSize / 2);
    circleY = random(circleSize / 2, height - circleSize / 2);
  }
}

function keyPressed() {
  if (keyCode === 32) {
    circleX = circleStartX;
    circleY = circleStartY;
    counter++; // increment the counter variable by 1
  }
}
