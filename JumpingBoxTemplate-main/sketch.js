var canvas;
var music;
var b1,b2,b3,b4,box;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    b1 = createSprite(5,580,300,30);
    b1.shapeColor = "red";

    b2 = createSprite(305,580,250,30);
    b2.shapeColor = "yellow";

    b3 = createSprite(505,580,250,30);
    b3.shapeColor = "blue";



    //create 4 different surfaces

box = createSprite(random(20,750),100,50,50);
box.shapeColor = "white";
box.velocityY = 8;
box.velocityX = 4;


}

function draw() {
    background(rgb(169,169,169));
  
    edges = createEdgeSprites();

box.bounceOff(edges);

if(b1.isTouching(box)&&box.bounceOff(b1)){
    box.shapeColor = "red";
    music.play();
}

if(b2.isTouching(box)&&box.bounceOff(b2)){
    box.shapeColor = "yellow";

}
if(b3.isTouching(box)&&box.bounceOff(b3)){
    box.shapeColor = "blue";
}
drawSprites();

}
