
var night, night_1;
var fairy, fairy_1;
var star, star_1;
var music, music_1;

function preload()
{
   night_1 = loadImage("images/starnight.png")
   fairy_1 = loadAnimation("images/fairy.png", "images/fairy1.png", "images/fairy2.png");
   star_1 = loadImage("images/star.png");
   music_1 = loadSound("sound/JoyMusic.mp3");
}

function setup() {
  createCanvas(600, 600);

  music_1.play();
  
  night = createSprite(0,0,600,600);
  night.addImage("bgnight",night_1)

  fairy = createSprite(50,400,10,10);
  fairy.addAnimation("fairyfly", fairy_1);
  fairy.scale = 0.1;

  star = createSprite(570,30,10,10);
  star.addImage("star1", star_1);
  star.scale = 0.2;
}


function draw() {

  

  if(keyCode === LEFT_ARROW){
    fairy.velocityX = -3;
 }

 if(keyCode === RIGHT_ARROW){
  fairy.velocityX = 3;
}

if(keyCode === DOWN_ARROW){
  star.velocityY = 3;
}

if (star.isTouching(fairy)){
     fairy.velocityX = 0;
     star.velocityY = 0;
}

drawSprites();
}



