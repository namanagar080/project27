
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint
var roof, bobObject1,bobObject2,bobObject3,bobObject4,bobObject5,rope1,rope2,rope3,rope4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof= new Roof(400,10,800,20);
    bobObject3=new Bob(400,200,100);
	bobObject2=new Bob(300,200,100);
	bobObject1=new Bob(200,200,100);
	bobObject4=new Bob(500,200,100);
	bobObject5=new Bob(600,200,100);
	rope1=new Rope(bobObject1.body,{x:200,y:10});
  rope2=new Rope(bobObject2.body,{x:300,y:10});
  rope3=new Rope(bobObject3.body,{x:400,y:10});
  rope4=new Rope(bobObject4.body,{x:500,y:10});
  rope5=new Rope(bobObject5.body,{x:600,y:10});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("green");
  roof.display();
  bobObject3.display();
  bobObject2.display();
  bobObject1.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
  keyPressed();
}
function keyPressed(){
	if(keyCode===UP_ARROW){
	Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-400,y:0})
	}
}




