function setup() {
    createCanvas(600, 600);
    background("black");
  }
  
  function draw() {
    stroke("rgb(78,245,78)");
    fill("purple");
  
    // console.log(mouseIsPressed)
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }