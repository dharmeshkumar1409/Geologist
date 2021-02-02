const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {

}

function setup() {
    createCanvas(800, 600);


    engine = Engine.create();
    world = engine.world;

    //Create the Bodies Here.
    ground = new Ground(400, height, 800, 20);

    stone = new Stone(200, 200, 50, 50);
    rubber = new Rubber(400, 200, 30);
    sand1 = new Sand(300, 200, 10);
    sand2 = new Sand(310, 210, 10);
    sand3 = new Sand(315, 220, 10);
    iron = new Iron(500, 300, 40, 50);
    hammer = new Hammer(100, 100);

    Engine.run(engine);

}


function draw() {
    background("blue");
    Engine.update(engine);
    ground.display();
    hammer.display();
    stone.display();
    rubber.display();
    sand1.display();
    sand2.display();
    sand3.display();
    iron.display();

    drawSprites();


}