var canvas;
var surface1, surface2, surface3, surface4, box;
var edges;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1 = createSprite(100,580,200,20);
    surface1.shapeColor = "blue";

    surface2 = createSprite(300,580,200,20);
    surface2.shapeColor = "orange";

    surface3 = createSprite(500,580,200,20);
    surface3.shapeColor = "red";

    surface4 = createSprite(700,580,200,20);
    surface4.shapeColor = "green";


    //create box sprite and give velocity
    box = createSprite(random(20,750),100,30,30);
    box.shapeColor = "white";
    box.velocityX = -4;
    box.velocityY = 5;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges = createEdgeSprites();
    box.bounceOff(edges);

    drawSprites();
    //add condition to check if box touching surface and make it box
    if(surface1.isTouching(box) && box.bounceOff(surface1)) {
        box.shapeColor = "blue";
        music.play();
    }
    if(surface2.isTouching(box)) {
        box.shapeColor = "orange";
        box.velocityX = 0;
        box.velocityY = 0;
        music.stop();
    }
    if(surface3.isTouching(box) && box.bounceOff(surface3)) {
        box.shapeColor = "red";
    }
    if(surface4.isTouching(box) && box.bounceOff(surface4)) {
        box.shapeColor = "green";
    }
}
