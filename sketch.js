const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	dustbin = new Dustbin(400,590,20,100);
	dustbin2 = new Dustbin(600,590,20,100);
	dustbin3 = new Dustbin(500,640,220,20);
	ground = new Ground(400,660,850,30);
	paper = new Paper(100,100);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  dustbin.display();
  dustbin2.display();
  dustbin3.display();
  paper.display();
  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
	}
}



