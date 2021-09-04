const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;



function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);
ground= new Base(width/2,height-10,width,20)
leftWall= new Base(250,height/2,500,100)
rightWall= new Base(width-250,height/2,500,100)
stone = new Stone(random(width/2-120,width/2+120),0,20)
stone2 = new Stone(random(width/2-120,width/2+120),0,20)
stone3 = new Stone(random(width/2-120,width/2+120),0,20)
stone4 = new Stone(random(width/2-120,width/2+120),0,20)
stone5 = new Stone(random(width/2-120,width/2+120),0,20)
stone6 = new Stone(random(width/2-120,width/2+120),0,20)
stone7 = new Stone(random(width/2-120,width/2+120),0,20)
stone8 = new Stone(random(width/2-120,width/2+120),0,20)


bridge=new Bridge(25,{x:440,y:height/2-70})
secondConnect = new Link(bridge,{x:width-440,y:height/2-70})
var render = Matter.Render.create({ element:document.body, engine:engine, options: { width:windowWidth, height:windowHeight, wireframes:false } }); Matter.Render.run(render);
}

function draw() {
  background(51);
  Engine.update(engine);
  ground.show()
  leftWall.show()
  rightWall.show()
  bridge.show()
  stone.show()
  stone2.show()
  stone3.show()
  stone4.show()
  stone5.show()
  stone6.show()
  stone7.show()
  stone8.show()
}
