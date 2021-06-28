function setup(
  speed=random(55,90)
weight=rendom(400,1500)
)
 {
  createCanvas(1600,400);
  var car,wall;
  var spped,weight;

  car=createSprite(50,200,50,50);
  wall=createSprite(1500,200,60,height/2)

  car.velocityX= 5;
}

function draw() {
  background("black"); 
  
  if (wall.x-car.x<(car.width+wall.width)/2) {
    car.velocityX=0;
    var deformation=0.5*width*speed*speed/22500;

    if (deformation>180) {
      car.shapeColor=color("yellow");
      wall.shapeColor=color("white")
    }

    if (deformation<180 && deformation>100) {
      car.shapeColor=color("green");
      wall.shapeColor=color("white");
    }

    if (deformation<100) {
      car.shapeColor=color("red")
      wall.shapeColor=color("white")
    }
  }
  drawSprites();
}