let x, y; // Starting coordinates
let length = 50; // Length of each line
let angleOffset = 0; // Initial angle

function setup() {
  createCanvas(400, 400);
  background(255); // White background

  // Start at a random position on the canvas
  x = width / 2;
  y = height / 2;
  
  //stroke(0); // Black lines 
  //change color of each line
  stroke(random(255), random(255), random(255));

  strokeWeight(2); // Line thickness
}

function draw() {
  // Draw lines until reaching the canvas edges
  if (x > 0 && x < width && y > 0 && y < height) { // Check if the point is within the canvas
    let angle = angleOffset + random(TWO_PI); // Random angle for each line
    let newX = x + cos(angle) * length;
    let newY = y + sin(angle) * length;

    line(x, y, newX, newY); // Draw the line

    // Update the starting point for the next line
    x = newX;
    y = newY;

    // Slightly vary the angle offset for more randomness
    angleOffset += random(-PI / 4, PI / 4);
    //loopp every 1000 frames
    if (frameCount % 100 == 0) {
      // Start at a random position on the canvas
do {
        //animate the lines
  
} while (condition);      
      x = width / 2;
      y = height / 2;
      angleOffset = 0;
      background(255); // White background
    }
  }
}
