var car,wall;
var speed,weight;



function setup() {
  createCanvas(400,1600);
 
  speed = random(5,9);
  weight = random(400,1500);

  car = createSprite(50,200,50,50);
  wall = createSprite(1500,200,60,height/2);

  car.velocityX = speed;
  wall.shapeColor = color(80,80,80);

  createSprite(400, 200, 50, 50);
  
}


function draw() {
  background(255,255,255);  

  if(wall.x - car.x < (car.width+wall.width)/2)
  {
    car.velocityX = 0;
    var deformation = 0.5* width * speed * speed/22500;
    if (deformation>180)
    {
      car.shapeColor = color(255,0,0);
    }
    if (deformation > 180 && deformation < 100)
    {
      car.shapeColor = color (250,250,0);
    }
  }

  drawSprites();

}