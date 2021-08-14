var car,carImg;
var road,roadImg;
var obstacle,obstacleImg1,obstacleImg2,obstacleGroup;

function preload (){
  roadImg = loadImage("image top.jpg")
  carImg  = loadImage("car.png");
  obstacleImg1 = loadImage("oil.png");
  obstacleImg2 = loadImage("stone.png");
}
function setup() {
  createCanvas(displayWidth,displayHeight);


road=createSprite(displayWidth, 200, displayWidth*2, displayHeight);
road.addImage (roadImg)
road.velocityX=-6
road.x = road.width/2


car = createSprite(100,150,50,50);
car.addImage(carImg)
car.scale=0.5

obstacleGroup = new Group()
}

function draw() {
  background("white");  

  if(road.x<500){
    road.x = road.width/2
  }
  spawnObstacles();
  drawSprites();
}

function spawnObstacles(){
  if(frameCount%150===0){
  obstacle = createSprite(450,320,100,100);
  obstacle.velocityX = -6 ;
  var rand = Math.round(random(1,2));
  switch(rand){
    case 1:obstacle.addImage(obstacleImg1);
    break;
    case 2:obstacle.addImage(obstacleImg2);
    break;
    default:break;
  }
  obstacle.scale = 0.1
  obstacle.depth = car.depth;
  obstacle.depth +=1;
  obstacle.lifetime=500;
  obstacleGroup.add(obstacle)
  }
}