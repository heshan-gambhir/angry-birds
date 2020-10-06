const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box2;
var box3;
var box4;
var box5;
var pig;
var pig1;
var log;
var log1;
var log2;
var log3;
var bird;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    box5 = new Box(810,120,70,70); 
    ground = new Ground(600,390,1200,20);
    pig = new Pig(810,320);
    pig1 = new Pig(810,220);
    log = new Log(810,260,300,PI/2);
    log1 = new Log(810,180,300,PI/2);
    log2 = new Log(760,120,170,PI/7);
    log3 = new Log(870,120,170,-PI/7);
    bird = new Bird(810,220);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();    
    ground.display();
    pig.display();
    pig1.display();
    log.display();
    log1.display();
    log2.display();
    log3.display();
    bird.display();
}