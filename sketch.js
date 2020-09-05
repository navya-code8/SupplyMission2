const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;


var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;

var wall1, wall2, wall3;

function preload(){
	helicopterIMG = loadImage("helicopter.png")
	packageIMG = loadImage("package.png")
}


function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
    world = engine.world;

	wall1 = new Walls(400,650, 200,20);
	wall2 = new Walls(310,600,20,125);
	wall3 = new Walls(490,600,20,125);

	ground = new Ground(400,660, 825, 15);
  
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage("package",packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage("helicopter",helicopterIMG)
	helicopterSprite.scale=0.6

	


	

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1, isStatic:true});
    World.add(world, packageBody);
    console.log(packageBody)

	Engine.run(engine);


	

 
}


function draw() {
  background(0);

  Engine.update(engine)
  wall1.display();
  wall2.display();
  wall3.display();

  ground.display();

  rectMode(CENTER);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  keyPressed();

  

  drawSprites();
 
}

function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    // Look at the hints in the document and understand how to make the package body fall only on

  }
}



