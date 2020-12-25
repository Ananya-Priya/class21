
var fixed, moving; 
var car1, car2;

var wall;

var bus1, bus2;

function setup() 
{
  createCanvas(1200,600);
  fixed=createSprite(400,400,50,80);
  moving=createSprite(600,200,80,50);
  fixed.shapeColor="green";
  moving.shapeColor="green";

  car1=createSprite(200,200,50,50);
  car1.shapeColor="pink";
  car1.velocityX=2;

  car2=createSprite(1000,200,50,50);
  car2.shapeColor="yellow";
  car2.velocityX=-2;

  wall= createSprite(1100,300,30,200);
  wall.shapeColor="green";

  bus1=createSprite(100,100,30,30);
  bus1.shapeColor="orange";
  bus1.velocityY=3;

  bus2=createSprite(100,500,30,30);
  bus2.shapeColor="blue";
  bus2.velocityY=-3;



 } 

 function draw()
{
    background(0);
    moving.x=mouseX;
    moving.y=mouseY;
    
   
    if(myIstouching(moving,wall) )
    {
      wall.shapeColor="red";
      moving.shapeColor="red"; 
    }
    else
    {
      wall.shapeColor="green";
      moving.shapeColor="green"; 
    }
    
      myBounceOff(car1,car2);

      myBounceOff(bus1,bus2);

    drawSprites(); 
  }

  
  