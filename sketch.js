const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var stone;
var tree;

var mango1 , mango2 , mango3, mango4 , mango5, mango6;
var launcher;
var boy , boyImage;

function preload() {
boyImage = loadImage ("Sprites/boy.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

   
    ground = new Ground(600,height,1200,20)

    stone = new Stone(670,270,20);
   
    boy = createSprite (740,340,20,20);
    boy.addImage(boyImage);
    boy.scale = 0.1;
    
    tree = new Tree(800,350,10,10);
    mango1 = new Mango(160,150,70);
    mango2 = new Mango (172,205,70);

    mango3 = new Mango (185,133,70);
    mango4 = new Mango(282,200,70);
    mango5 = new Mango(59,209,70);

    mango6 =  new Mango(109,209,70);
    
    launcher = new Launcher (stone.body,{x:670, y:270});
}

function draw(){
    background("white");
    Engine.update(engine);
    //strokeWeight(4);
    tree.display();
    mango1.display();
    mango2.display();
    ground.display();
    mango3.display();
    mango4.display();

    mango5.display();
    mango6.display();
    stone.display();
    
    
    launcher.display();   
    
    if(isTouching(stone,mango1))
{
  console.log('in')
  Matter.Body.setStatic(mango1.body,false);
}
if(isTouching(stone,mango2))
{
  Matter.Body.setStatic(mango2.body,false);
}
if(isTouching(stone,mango3))
{
  Matter.Body.setStatic(mango3.body,false);
}
if(isTouching(stone,mango4))
{
  Matter.Body.setStatic(mango4.body,false);
}
if(isTouching(stone,mango5))
{
  Matter.Body.setStatic(mango5.body,false);
}
if(isTouching(stone,mango6))
{
  Matter.Body.setStatic(mango6.body,false);
}
drawSprites();

}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
   
}




function mouseReleased(){
    launcher.fly();
}

function keyPressed(){
    if (keyCode ===32){
     launcher.attach(stone.body);   
    }
}

function isTouching(obj1,obj2){

    if (obj1.x - obj2.x < obj2.width/2 + obj1.width/2
      && obj2.x - obj1.x < obj2.width/2 + obj1.width/2
      && obj1.y - obj2.y < obj2.height/2 + obj1.height/2
      && obj2.y - obj1.y < obj2.height/2 + obj1.height/2) {
   return true;
  }
  else {
    return false;
  }
  }

