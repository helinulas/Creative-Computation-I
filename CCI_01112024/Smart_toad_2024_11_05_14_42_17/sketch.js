let rectangles = []; // Array to store rectangle properties

function setup() {
  createCanvas(400, 400); // Create a 400x400 canvas
  background(0, 0, 255); // Set background to blue

  // Initialize rectangles with random properties
  for (let i = 0; i < 20; i++) {
    rectangles.push({
      x: random(20, width - 20), // Random x position, avoiding edges
      y: random(20, height - 20), // Random y position, avoiding edges
      w: random(20, 100), // Random width between 20 and 100
      h: random(20, 100), // Random height between 20 and 100
      opacity: random(50, 200) // Random opacity
    });
  }
}

function draw() {
  background(0, 0, 255, 25); // Light trailing effect for animation

  // Loop through each rectangle to update and draw
  for (let i = 0; i < rectangles.length; i++) {
    let rectObj = rectangles[i];
    
    fill(255, 255, 255, rectObj.opacity); // Set color with random opacity
    noStroke();
    
    rect(rectObj.x, rectObj.y, rectObj.w, rectObj.h); // Draw rectangle
    
    // Add horizontal and vertical jiggling effect with a larger range
    rectObj.x += random(-1, 1); // Update x position with larger random range
    //rectObj.y += random(-1, 1); // Update y position with larger random range
  }
}
