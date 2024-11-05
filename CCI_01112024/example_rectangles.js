function setup() {
    createCanvas(400, 400); // Creates a 400x400 pixel canvas
    background(0, 0, 255); // Sets the background color to blue
  
    // Draw multiple rectangles
    for (let i = 0; i < 20; i++) { // Change 20 to however many rectangles you want
      let x = random(20, width - 20); // Random x position, avoiding edges
      let y = random(20, height - 20); // Random y position, avoiding edges
      let w = random(20, 100); // Random width between 20 and 100
      let h = random(20, 100); // Random height between 20 and 100
      let opacity = random(50, 200); // Random opacity between 50 and 200
  
      fill(255, 255, 255, opacity); // White color with random opacity
      noStroke();
      rect(x, y, w, h); // Draw the rectangle
    }
  }
  
  function draw() {
    // No need to draw continuously, so we leave draw() empty
  }