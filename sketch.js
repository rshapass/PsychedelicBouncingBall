var ball = {
  x: 25,
  y: 25,
  diameter: 30,
};
var numPixels=10; 

var evil = {
  x: 100,
  y: 150,
  diameter: 50,
  xspeed:2,
  yspeed:2
};

var evil2 = {
  x: 200,
  y: 150,
  diameter: 50,
  xspeed:4,
  yspeed:4
};


function setup() {
  createCanvas(600,400);
  
}

function draw() {
background(0);
renderBall();
renderEvil();
moveEvil();
detectEdges();
renderEvil2();
moveEvil2();
detectEdges2();
youLose();
youLose2();
// youWin();
}

//makes ball move according to keys
function keyPressed()
{
  if(keyCode == UP_ARROW)
  {
    ball.y = ball.y - numPixels; 
  }
  if(keyCode == DOWN_ARROW)
  { 
    ball.y = ball.y + numPixels; 
  }
  if(keyCode == RIGHT_ARROW)
  {
    ball.x = ball.x + numPixels; 
  }

  if(keyCode == LEFT_ARROW)
  {
    ball.x = ball.x - numPixels; 
  }
}

// makes Ball
function renderBall() {
  fill(0, 255, 0);
  ellipse(ball.x, ball.y, ball.diameter, ball.diameter);
}

//makes "the bad guy"
function renderEvil(){
  fill(random(255),random(255), random(255));
  ellipse(evil.x, evil.y, evil.diameter, evil.diameter);
}

//

//moves the bad guy
function moveEvil() {
  evil.x = evil.x + evil.xspeed;
  evil.y = evil.y + evil.yspeed;
}

//bounces the bad guy
function detectEdges() {
  if (evil.x > width || evil.x < 0) {
    evil.xspeed = evil.xspeed * -1;
  }
  if (evil.y > height || evil.y < 0) {
    evil.yspeed = evil.yspeed * -1;
  }
}

function renderEvil2(){
  fill(random(255),random(255), random(255));
  ellipse(evil2.x, evil2.y, evil2.diameter, evil2.diameter);
}

function moveEvil2() {
  evil2.x = evil2.x + evil2.xspeed;
  evil2.y = evil2.y + evil2.yspeed;
}

function detectEdges2() {
  if (evil2.x > width || evil2.x < 0) {
    evil2.xspeed = evil2.xspeed * -1;
  }
  if (evil2.y > height || evil2.y < 0) {
    evil2.yspeed = evil2.yspeed * -1;
  }
}

function youLose() {
  if (evil.x < ball.x || evil.y < 0) {
    textSize(40); 
    text("you lose!", 200, 200);
    fill (255);
  }
}

function youLose2() {
  if (evil2.x < ball.x || evil2.y < 0) {
    textSize(40); 
    text("you lose!", 200, 200);
    fill (255);
}
    
// function youWin(){
//   if(ball.x > 600){
//     textSize(20);
//     text("you win!",200,200);
//   }
// }
  }