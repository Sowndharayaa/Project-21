var bullet,wall,thickness;
var speed,weight;

function setup() {
  createCanvas(1600,400);

  speed = random(100,200);
  weight = random (30,52);
  thickness = random (22,83)

  bullet = createSprite( 50,200,30,5);
  bullet.velocityX = speed;
  bullet.shapeColor = color("white")
  
  wall = createSprite (1200,200,60,height/2);
  wall.shapeColor = color(80,80,80); 
}

function draw() {
  background("Orange");

    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness)
     collide(bullet,wall);

     if(damage<10){
       wall.shapeColor = color("green");
     }
     if(damage > 10){
       wall.shapeColor = color("red");
     }
     bullet.depth = wall.depth +2;
  drawSprites();
}
function collide(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
      object1.setVelocity(0,0)
    }
  }