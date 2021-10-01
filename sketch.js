const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball, ballImg
var floors
var wall1
var ground, leftBoundary, rightBoundary
var endBall
var ballCollision
var gameState = "play"
function preload() {
  ballImg = loadImage("ball.gif")
}

function setup() {
  createCanvas(600, 600)
  engine = Engine.create();
  world = engine.world;
  ball = new Ball(100, 50, 30, 30)
  wall1 = new Wall(50, 70, 200, 30)
  wall2 = new Wall(50, 170, 100, 30)
  wall3 = new Wall(50, 270, 600, 30)
  wall4 = new Wall(25, 370, 50, 30)
  wall5 = new Wall(100, 470, 300, 30)
  wall6 = new Wall(550, 70, 600, 30)
  wall7 = new Wall(550, 170, 700, 30)
  wall8 = new Wall(550, 270, 200, 30)
  wall9 = new Wall(550, 370, 800, 30)
  wall10 = new Wall(500, 470, 300, 30)
  ground = new Wall(300, 575, 600, 50)
  leftBoundary = new Wall(5, 300, 10, 600)
  rightBoundary = new Wall(595, 300, 10, 600)
  endBall = new Ball(590, 550, 30, 30)
  console.log(frameRate())
}

function draw() {
  background("gray");
  console.log(frameCount/60)
  if (gameState === "play") {



    ball.display()
    wall1.display()
    wall2.display()
    wall3.display()
    wall4.display()
    wall5.display()
    wall6.display()
    wall7.display()
    wall8.display()
    wall9.display()
    wall10.display()
    ground.display()
    leftBoundary.display()
    rightBoundary.display()
    endBall.display()
    ballCollision = Matter.SAT.collides(ball.body, endBall.body)
    if (ballCollision.collided) {
      gameState = "end"
      textSize(50)
      fill("green")
      text("You Win!", 200, 300)

    }
    Engine.update(engine);
  }
  else if (gameState === "end") {
    textSize(50)
    fill("green")
    if(frameCount/60<=12){
      text("You Win!", 200, 300)

    }
    else{
      textSize(30)
      text("You Lose!", 200, 300)
      text("Try harder next time", 125, 325)
      text("To win touch the ball under 12 seconds", 50, 350)
    }

  }
}
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    leftForce()
    console.log("left arrow pressed")
  }
  if (keyCode === RIGHT_ARROW) {
    rightForce()
    console.log("right arrow pressed")
  }
}
function leftForce() {
  Matter.Body.applyForce(ball.body, ball.body.position, { x: -20, y: 0 })
  console.log("left force")
}
function rightForce() {
  Matter.Body.applyForce(ball.body, ball.body.position, { x: 20, y: 0 })
}
function spawnWalls() {
  for (let index = 0; index < 5; index++) {
    var wall1 = new Wall(random(100, 500), random(100, 500), 50, 30)
    wall1.display();
  }
}