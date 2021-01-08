
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1, bob2, bob3, bob4, bob5
var ground1
var rope1, rope2, rope3, rope4, rope5

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);


	//Create the Bodies Here.
	bob1 = new bob(140, 600, 50);
	
	bob2 = new bob(180, 600, 50);
	bob3 = new bob(230, 600, 50);
	bob4 = new bob(280, 600, 50);
	bob5 = new bob(330, 600, 50);
	ground1 = new ground(300, 50, 400,30 );
	rope1 = new rope(bob1.body, { x: 140, y: 70 } );
	rope2 = new rope(bob2.body, { x: 180, y: 70 } );
	rope3 = new rope(bob3.body, { x: 230, y: 70 } );
	rope4 = new rope(bob4.body, { x: 280, y: 70 } );
	rope5 = new rope(bob5.body, { x: 330, y: 70 } );
	

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  ground1.display();
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
	drawSprites();
 
}
function mouseDragged(){
    Body.setPosition(bob1.body, {x: mouseX, y:mouseY} );
}



