
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject,paper;
var world;


function setup() {
	createCanvas(1600, 700);
	


	engine = Engine.create();
	world = engine.world;
	paper=new Paper(500,300,100,100);
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	

	Engine.run(engine);
  
}


function draw() {
 
  background("white");
  groundObject.display(); 
  paper.display();
  dustbinObj.display();

  
  
  

}
function keyPressed(){
    if(keyCode === 32){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:600,y:-500})
		
		
	}
}
