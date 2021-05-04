const Engine = Matter.Engine;
const World = Matter.World;
const Bodies= Matter.Bodies;

var engine,world;

function preload()
{
  bgimg=loadImage("snow2.jpg");
}


function setup() {
  createCanvas(800,800);

  engine=Engine.create();
  world=world.engine;

  bg=createSprite(200,200,50,50);
  bg.addAnimation("running",bgimg);

  snowball=new snow();
}

function draw() {
  background("bg");  

  snowball.display();
  drawSprites();
}















