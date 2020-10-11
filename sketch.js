var car,wall,thckness;
var speed,weight,bullet;

function setup() {
  createCanvas(1600,400);
  car=createSprite(50, 200, 50, 50);
  car.shapeColor="green";
  car.velocityX=speed;

  wall=createSprite(1200,200,thckness,height/2)
  wall.shapeColor=("80,80,80");
  weight=random(400,1500);
  thckness=random(22,83);

  speed=random(223,321);
  speed=random(30,52);




}

function draw() {
  background("black"); 
  if(wall.x<(car.width+wall.width)){
car.velocityX=0;
var deformation=0.5*weight*speed*speed/22509;
if(deformation>180)
{

  car.shapeColor=color(255,0,0);
}
if(deformation<180 && deformation>100)
{

  car.shapeColor=color(230,230,0);
}
if(deformation<100)
{

  car.shapeColor=color(0,255,0);
}


  } 
  car.x=mouseX;


  drawSprites();
}

function hasCollided(Lbullet,Lwall){

  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if (bulletRightEdge>=wallLeftEdge){
return true;

  }



}