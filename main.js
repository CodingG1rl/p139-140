
var paddle1=10, paddle2=10;

var paddle1X=10,paddle1Height=110;
var paddle2Y=680,paddle2Height=70;

var score1=0, score2=0;
var paddleY;

var playerscore=0;
var pcscore=0;

var ball={
  x:350/2,
  y:480/2,
  r:20,
  dx:3,
  dy:3 
}

rightWristX=0;
rightWristY=0;

scoreRightWrist=0;

game_status="";

function preload(){
  ball_touch_paddle= loadSound("ball_touch_paddel.wav");
  missed= loadSound("missed.wav");
}

