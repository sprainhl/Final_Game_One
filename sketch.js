//resize the canvas, but keep the 9:16 aspect ratio
var canvasMultiplier = 40;

//make an enemy every so many frames
var enemyRate = 50;
var powerRate = 500;
var enemyAngle = 20;

// drunk direction is the magnitude of direction shifts
var enemyDrunkness = 100;
var enemyDrunkDirection = 2;

//how many particles release when hit
var heroSpeed = 10;
var explosionDensity = 20;

//for score
var score = 0;
var gameState = 'startUp';
var heroHealth = 3;

//declare the hero
var hero;

//declare powerup sprite
var heroState = 'regular';
//declare powerup sprite
var powerUps;


//declare sprite GROUP
var bullets;
var enemies;

//variable for power up image
var powerUpImg;

//variable for bullet image
var bullet;


//variable for health
var health_end,health_half,health_full;

// enemy animation variable
var enemyDefault, enemytwoDefault, enemythreeDefault;

// hero animation variable
//var heroDefault,heroLeft,heroRight;

var count1Downtimer = 0;
var count2Downtimer = 0;

var level1ScoreAdvance = 10;
var level2ScoreAdvance = 20;


var bg_title, bg_level1, bg_level2, bg_level3;
var bg_countdownone,bg_countdowntwo;
var bg_winscreen;
/////////////////////////////////
//sound variables
var shooting;
var levelOne_music;
var levelTwo_music;
var levelThree_music;
var explosion;
var splash;
var power_up;
var hero_hit;
//////////////////////////////////



var heroDefault_animation;
var heroLeft_animation;
var heroRight_animation;

//loads the images from the sprite sheet
  hero_Defaultframe = [{
    "name": "heroDefault_00000.png",
    "frame": {
      "x": "0",
      "y": "0",
      "width": "256",
      "height": "256"
    }
  },
  {
    "name": "heroDefault_00001.png",
    "frame": {
      "x": "256",
      "y": "0",
      "width": "256",
      "height": "256"
    }
  },
  {
    "name": "heroDefault_00002.png",
    "frame": {
      "x": "512",
      "y": "0",
       "width": "256",
      "height": "256"
    }
  },
  {
    "name": "heroDefault_00003.png",
    "frame": {
      "x": "768",
      "y": "0",
      "width": "256",
      "height": "256"
    }
  },
  {
    "name": "heroDefault_00004.png",
    "frame": {
      "x": "1024",
     "y": "0",
       "width": "256",
      "height": "256"
    }
  },{
    "name": "heroDefault_00005.png",
    "frame": {
      "x": "1280",
     "y": "0",
       "width": "256",
      "height": "256"
    }
  },
  {
    "name": "heroDefault_00006.png",
    "frame": {
      "x": "1536",
      "y": "0",
      "width": "256",
      "height": "256"
    }
  },
  {
    "name": "heroDefault_00007.png",
    "frame": {
      "x": "1792",
      "y": "0",
      "width": "256",
      "height": "256"
    }
  }];
  hero_Leftframe = [{
    "name": "heroLeft_00000.png",
    "frame": {
      "x": "0",
     "y": "256",
       "width": "256",
      "height": "256"
    }
  },
  {
    "name": "heroLeft_00001.png",
    "frame": {
      "x": "256",
     "y": "256",
       "width": "256",
      "height": "256"
    }
  },
   {
    "name": "heroLeft_00002.png",
    "frame": {
      "x": "512",
     "y": "256",
       "width": "256",
      "height": "256"
    }
   },
    {
    "name": "heroLeft_00003.png",
    "frame": {
      "x": "768",
     "y": "256",
       "width": "256",
      "height": "256"
    }
  },
  {
    "name": "heroLeft_00004.png",
    "frame": {
      "x": "1024",
     "y": "256",
       "width": "256",
      "height": "256"
      }
    },
    {
    "name": "heroLeft_00005.png",
    "frame": {
      "x": "1280",
     "y": "256",
       "width": "256",
      "height": "256"
    },
  }];
  hero_Rightframe =[{
    "name": "heroRight_00000.png",
    "frame": {
      "x": "0",
     "y": "512",
       "width": "256",
      "height": "256"
    }
  },
  {
    "name": "heroRight_00001.png",
    "frame": {
      "x": "256",
     "y": "512",
       "width": "256",
      "height": "256"
    }
  },
   {
    "name": "heroRight_00002.png",
    "frame": {
      "x": "512",
     "y": "512",
       "width": "256",
      "height": "256"
    }
   },
    {
    "name": "heroRight_00003.png",
    "frame": {
      "x": "768",
     "y": "512",
       "width": "256",
      "height": "256"
    }
  },
  {
    "name": "heroRight_00004.png",
    "frame": {
      "x": "1024",
     "y": "512",
       "width": "256",
      "height": "256"
    }
  },
  {
    "name": "heroRight_00005.png",
    "frame": {
      "x": "1280",
     "y": "512",
       "width": "256",
      "height": "256"
    }
  },
   {
    "name": "heroRight_00005.png",
    "frame": {
      "x": "1536",
     "y": "512",
       "width": "256",
      "height": "256"
    }
  },
   {
    "name": "heroRight_00006.png",
    "frame": {
      "x": "1792",
     "y": "512",
       "width": "256",
      "height": "256"
    }
  },
   {
    "name": "heroRight_00007.png",
    "frame": {
      "x": "2048",
     "y": "512",
       "width": "256",
      "height": "256"
    }
  },
   {
    "name": "heroRight_00008.png",
    "frame": {
      "x": "2304",
     "y": "512",
       "width": "256",
      "height": "256"
    }
  },
   {
    "name": "heroRight_00009.png",
    "frame": {
      "x": "2560",
     "y": "512",
       "width": "256",
      "height": "256"
    }
  }];

function preload(){
  
  

///loads the animations 
  hero_Defaultframe = loadSpriteSheet('assests/sprite_sheet.png',hero_Defaultframe);
  heroDefault_animation = loadAnimation(hero_Defaultframe);
  
  hero_Leftframe = loadSpriteSheet('assests/sprite_sheet.png',hero_Leftframe);
  heroLeft_animation = loadAnimation(hero_Leftframe);
  
  hero_Rightframe = loadSpriteSheet('assests/sprite_sheet.png',hero_Rightframe);
  heroRight_animation = loadAnimation(hero_Rightframe);
  
  
  shooting = loadSound("assests/shooting.mp3");
  explosion = loadSound("assests/explosion.mp3");
  levelOne_music = loadSound("assests/levelOne_JAM.mp3");
  levelTwo_music = loadSound("assests/levelTwo_JAM.mp3");
  levelThree_music = loadSound("assests/levelThree_JAM.mp3");
  splash = loadSound("assests/splash.mp3");
  power_up = loadSound("assests/power_up.mp3");
  hero_hit = loadSound("assests/hero_hit.mp3");
  
  bg_title = loadImage("assests/bg_title.png");
  bg_level1 = loadImage("assests/bg_levelone.png");
  bg_level2 = loadImage("assests/bg_leveltwo.png");
  bg_level3 = loadImage("assests/bg_levelthree.png");
  bg_loose = loadImage("assests/bg_loose.png");
  bg_winscreen = loadImage("assests/bg_winscreen.png");
  bg_countdownone = loadImage("assests/bg_countdownone.png");
  bg_countdowntwo = loadImage("assests/bg_countdowntwo.png");
  
  powerUpImg = loadImage("assests/power_up.png");
  
  bulletImg = loadImage("assests/bullet.png");
  
  health_end = loadImage("assests/health_end.png");
  health_half = loadImage("assests/health_half.png");
  health_full = loadImage("assests/health_full.png");
  
  
  enemyDefault = loadAnimation("assests/enemyDefault_00000.png", "assests/enemyDefault_00009.png");
  enemytwoDefault = loadAnimation("assests/enemytwoDefault_00000.png", "assests/enemytwoDefault_00008.png");
  enemythreeDefault = loadAnimation("assests/enemythreeDefault_00000.png", "assests/enemythreeDefault_00008.png");
  
  /*
  heroDefault = loadAnimation("assests/heroDefault_00000.png", "assests/heroDefault_00009.png");
  heroDefault.frameDelay = 2;
  
  heroLeft = loadAnimation("assests/heroLeft_00000.png", "assests/heroLeft_00009.png");
  heroLeft.looping = false;
  heroLeft.frameDelay = 4;
  
  heroRight = loadAnimation("assests/heroRight_00000.png", "assests/heroRight_00009.png");
  heroRight.looping = false;
  heroRight.frameDelay = 4;*/
  
}


function setup() {
  
  var tempWidth = canvasMultiplier * 9;
  var tempHeight = canvasMultiplier * 16;
  createCanvas(tempWidth,tempHeight);
 
  
  
  //initialize bullets as a group of sprites
  bullets = new Group();
  enemies = new Group();
  powerUps = new Group();
  //define the hero the hero sprite in the middle towards the bottom
  //decrease number to increase friction, increase number to decrease friction
  hero = createSprite(width/2, height*.8, 30, 30);
  hero.scale = .3;
  //give the hero sprite some friction
  hero.friction = 0.85;
  
  //show the space around the hero
  //hero.debug = true;
  
  //add all animations to the hero
  /*
  hero.addAnimation('hero', heroDefault_animation);
  hero.addAnimation("heroLeft", heroLeft);
  hero.addAnimation("heroRight", heroRight);*/
  
  /////add all animations to the hero
  hero.addAnimation("heroDefault", hero_Defaultframe);
  hero.addAnimation("heroLeft",hero_Leftframe);
  hero.addAnimation("heroRight",hero_Rightframe);
  //start animating with the default
  hero.changeAnimation("heroDefault");
  
  
  
  
  

}

function draw() {
  switch(gameState){
    case 'startUp':
      background(bg_title);
      break;
    
    case 'loose':
      background(bg_loose);
      break;
    
    case 'win':
      background(bg_winscreen);
      break;
    
    case 'levelOne':
      levelOne();
      break;
    
    case 'levelTwo':
      levelTwo();
      break;
    
    case 'levelThree':
      levelThree();
      break;
      
    case 'countDown1':
      background(bg_countdownone);
      textSize(32);
      //only runs the first time through the coutdown
      if(count1Downtimer === 0){
        count1Downtimer = frameCount;
      }
      var flooredCount = floor((frameCount - count1Downtimer)/50);
      //this runs every time
      textAlign(CENTER);
      
      textSize(150);
      if((3 - flooredCount) <= 0){
        
        text("GO!",width/2,400);
      }else{
        text(3 - flooredCount,width/2,400);
      }
      
      //advance to level 2
      if(flooredCount > 3){
        gameState = "levelTwo";
        levelOne_music.stop();
        levelTwo_music.amp(0.1);
        levelTwo_music.loop();
        //add countdown music
      }
      break;
    
    case 'countDown2':
      background(bg_countdowntwo);
      textSize(32);
      //only runs the first time through the coutdown
      if(count2Downtimer === 0){
        count2Downtimer = frameCount;
      }
      var flooredCount = floor((frameCount - count2Downtimer)/50);
      //this runs every time
      textAlign(CENTER);
      
      textSize(150);
      if((3 - flooredCount) <= 0){
        
        text("GO!",width/2,400);
      }else{
        text(3 - flooredCount,width/2,400);
      }
      
      //advance to level 3
      if(flooredCount > 3){
        gameState = "levelThree";
        levelTwo_music.stop();
        levelThree_music.amp(0.1);
        levelThree_music.loop();
      }
      break;
    }  
  }
  
  
  


function keyPressed(){
  
  if(keyCode == RIGHT_ARROW){
    //provide a burst of speed to the right (zero degrees)
    hero.setSpeed(heroSpeed,0);
    hero.changeAnimation("heroRight");
    hero.animation.changeFrame(0);
  
    
  } else if (keyCode == LEFT_ARROW){
    //provide a burst of speed to the left (180 degrees)
    hero.setSpeed(heroSpeed,180);
    hero.changeAnimation("heroLeft");
    hero.animation.changeFrame(0);
  
    
  } else if (key == ' '){
   
    shooting.play();
    shooting.amp(0.1);
    //this is inputing the sound for the spacebar for shooting
    var panning = map(hero.position.x,0,width,-1.0,1.0);
    shooting.pan(panning);
    //when the hero moves and shoots the sound moves
    
    if(heroState == 'regular'){
      //create bullet at the location of the hero and set the size
      var bullet = createSprite(hero.position.x, hero.position.y,5,5);
      //set the speed and direction of the bullet
      bullet.setSpeed(20,270);
      //make a bullet disappear after a certain number of frames
      bullet.life = 50;
      //bullet.shapeColor = 'blue'
      //add the singular bullet to the group bullets
      bullets.add(bullet);
      bullet.addImage("bulletImg", bulletImg);
    }
    
    if(heroState == 'power'){
      for(var i = 0;i < 3;i++){
        //create bullet at the location of the hero and set the size
        var bullet = createSprite(hero.position.x, hero.position.y,5,5);
        //set the speed and direction of the bullet
        var angle = 255 + (i*15);
        bullet.setSpeed(20,angle);
      //make a bullet disappear after a certain number of frames
      bullet.life = 50;
      bullet.shapeColor = 'blue'
      //add the singular bullet to the group bullets
      bullets.add(bullet);
      } 
    }
  
  }

  
}

function keyTyped(){
  if(key === 'x'){
     gameState = 'levelOne';
     levelOne_music.amp(0.1);
     levelOne_music.loop();
  }
}


