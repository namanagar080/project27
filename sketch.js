
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint
var roof, bobObject1,bobObject2,bobObject3,bobObject4,bobObject5 ;;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof= new Roof(400,10,800,20);
    bobObject3=new Bob(400,200,100,10);
	bobObject2=new Bob(300,200,100,100);
	bobObject1=new Bob(200,200,100,100);
	bobObject4=new Bob(500,200,100,100);
	bobObject5=new Bob(600,200,100,100);
	rope1=new Rope(bobObject1,roof,-bobDiameter*2,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roof.display();
  bobObject3.display();
  bobObject2.display();
  bobObject1.display();
  bobObject4.display();
  bobObject5.display();
  drawSprites();
 
}



