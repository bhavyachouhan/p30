
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1100, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,20);
    ball = new Ball(100,500,15);
    box1 = new Box(870,310,255,10);
    box2 = new Box(520,490,355,10);
    enemie1 = new Enemies1(782,270,40,50);
    enemie2 = new Enemies1(824,270,40,50);
    enemie3 = new Enemies1(868,270,40,50);
    enemie4 = new Enemies1(912,270,40,50);
    enemie5 = new Enemies1(956,270,40,50);

    enemies1 = new Enemies2(824,250,40,50);
    enemies2 = new Enemies2(868,250,40,50);
    enemies3 = new Enemies2(912,250,40,50);

    Enemie1 = new Enemies3(868,235,40,50);
    
    enemie6 = new Enemies1(390,480,40,50);
    enemie7 = new Enemies1(434,480,40,50);
    enemie8 = new Enemies1(478,480,40,50);
    enemie9 = new Enemies1(522,480,40,50);
    enemie10 = new Enemies1(566,480,40,50);
    enemie11 = new Enemies1(610,480,40,50);
    enemie12 = new Enemies1(654,480,40,50);

    enemies4 = new Enemies2(434,430,40,50);
    enemies5 = new Enemies2(478,430,40,50);
    enemies6 = new Enemies2(522,430,40,50);
    enemies7 = new Enemies2(566,430,40,50);
    enemies8 = new Enemies2(610,430,40,50);

    Enemie2 = new Enemies3(478,380,40,50);
    Enemie3 = new Enemies3(522,380,40,50);
    Enemie4 = new Enemies3(566,380,40,50);

    Enemies = new Enemies4(522,330,40,50);
	
	Engine.run(engine);
    console.log(box1);
    slingshot = new SlingShot(ball.body,{x:150, y:180});
}



function draw() {
  rectMode(CENTER);
  background("blue");
  text(mouseX+"  :  "+mouseY,100,50);  
  strokeWeight(4);
  drawSprites();
  ball.display();
  box1.display();
  box2.display();
  enemie1.display();
  enemie2.display();
  enemie3.display();
  enemie4.display();
  enemie5.display();

  enemie6.display();
  enemie7.display();
  enemie8.display();
  enemie9.display();
  enemie10.display();
  enemie11.display();
  enemie12.display();
  
  enemies1.display();
  enemies2.display();
  enemies3.display();

  enemies4.display();
  enemies5.display();
  enemies6.display();
  enemies7.display();
  enemies8.display();

  Enemie1.display();

  Enemie2.display();
  Enemie3.display();
  Enemie4.display();

  Enemies.display();

  ground.display();
  slingshot.display();
 
}
//function keyPressed() {
	//if (keyCode === UP_ARROW) {
	//Matter.Body.applyForce(ball.body,ball.body.position,{x:850,y:-750});
	// }
   //}

   function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX,y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
    if(keyCode === 32){
    slingShot.attach(this.ball);
    }
}