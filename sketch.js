const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,b1,b2,b3,b4,bb1,bb2,bb3,bbb1,bbb2,bbbb1;
var backgroundImg,platform;
var ball, slingShot;

function preload() {

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,300,300,20);
    platform = new Ground(150, 505, 300, 170);

    box1 = new Box(500,250,50,50);
    box2 = new Box(550,250,50,50);
    box3 = new Box(600,250,50,50);
    box4 = new Box(650,250,50,50);
    box5 = new Box(700,250,50,50);
    b1 = new Box(525,200,50,50);
    b2 = new Box(575,200,50,50);
    b3 = new Box(625,200,50,50);
    b4 = new Box(675,200,50,50);
    bb1 = new Box(550,150,50,50);
    bb2 = new Box(600,150,50,50);
    bb3 = new Box(650,150,50,50);
    bbb1 = new Box(575,100,50,50);
    bbb2 = new Box(625,100,50,50);
    bbbb1 = new Box(600,50,50,50);
    ball = new ob(100,100);



    slingshot = new SlingShot(ball.body,{x:200, y:50});
}

function draw(){
    background("grey");
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    box3.display();
    box4.display();
    box5.display();
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    bb1.display();
    bb2.display();
    bb3.display();
    bbb1.display();
    bbb2.display();
    bbbb1.display();
    ball.display();
    platform.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode===32){
        slingshot.attach(ball.body)
    }
}