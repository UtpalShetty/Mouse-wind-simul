// Exercise 2.5
//Create a wind force that’s variable. Can you make it interactive? For example, think of a fan located where the mouse is and 
// pointed toward the circles.  

//CODE SECTION//


// Array for creating multiple objects
let movers = [];


//Mover class with constructor function and with show(), applyForce(), update(), checkEdges() methods
class Mover {
  constructor(x, y, mass, colour, radius) {
    this.position = createVector(x, y);
    this.velocity  = createVector(0, 0);
    this.acceleration = createVector(0, 0);
    this.mass = mass;
    this.colour = colour;
    this.radius = radius;
  }

  //Create the elliptical objects
  show () {
    fill(this.colour);
    stroke(0);
    ellipse(this.position.x, this.position.y, this.radius * 2, this.radius * 2);
  }


  // This is responsible for creating the force required to act on the object, based on the formula "F = ma"
  applyForce (force) {
    let f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f);

  }

  update () {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  }
 
  //Responsible for checking edges so that objects don't wander off the canvas
  checkEdges () {
    if(this.position.x > windowWidth) {
      this.position.x = windowWidth;
      this.velocity.x *= -1;
    }else if(this.position.x < 0) {
      this.position.x = 0;
      this.velocity.x *= -1;
    }

    if(this.position.y > windowHeight) {
      this.position.y = windowHeight;
      this.velocity.y *= -1;
    }else if(this.position.y < 0) {
      this.position.y = 0;
      this.velocity.y *= -1;
    }
  }
}

var setup = function() {
  createCanvas(windowWidth, windowHeight);
  

  for(let i = 0; i < 30; i++) {
    let colour = color(random(139, 255), random(0, 128), random(0, 128));
    movers.push(new Mover(random(width), random(height), random(1, 3), colour, random(1, 50)));
  }

  

}

var draw = function() {
  background(31, 31, 33);
  
 
  for(let mover of movers) {
  let fan = createVector(-mouseX/10000, -mouseY/10000);
  mover.applyForce(fan);

  mover.update();
  mover.checkEdges();
  mover.show();
  }
}



  
 

  




