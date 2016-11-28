 function levelTwo(){
   
  //setup the enemy to be created ever 30 frames
  if(frameCount%enemyRate === 0){
    //make an enemy at the top, random X
    var enemy = createSprite(random(width), 0,40,40);
    //set the speed and direction of the bullet
    enemy.setSpeed(3,random(90 - enemyAngle,9 + enemyAngle));
    //make the bullet dissappear after a certain number of frames
    enemy.life = 200;
    enemy.shapeColor = 'red';
    
    
    enemy.addAnimation("enemytwoDefault", enemytwoDefault);
    
    //add the singular bullet to the GROUP bullets
    enemies.add(enemy);
    
  }
  //THIS IS THE CODE FOR RANDOM ENEMY MOVEMENT
  for(var i = 0;i < enemies.length;i++){
    //a technique for timing something randomly
    if(random(100) < enemyDrunkness){
      enemies[i].velocity.x += random(-enemyDrunkDirection,enemyDrunkDirection);
    }
    
    // || is the OR symbol && is the AND symbol
    if(enemies[i].position.x > width || enemies[i].position.x < 0){
      enemies[i].velocity.x *= -1;
    }
  }
  
  /*This the code for bouncing enemies on the X
  for(var i = 0;i < enemies.length;i++){
    if(enemies[i].position.x > width || enemies[i].position.x<0){
      enemies[i].velocity.x *= -1;
    }
  }
  */
  if(frameCount%powerRate === 0){
    //make an powerup at the top, random x
    var powerUp = createSprite(random(width), 0,40,40);
    //set the speed and direction fo the bullet
    powerUp.setSpeed(3,random(90 - enemyAngle,90 + enemyAngle));
    //make the bullet disappear after a certain number of frames
    powerUp.life = 200;
    powerUps.add(powerUp);
    
    powerUp.addImage("powerUpImg", powerUpImg);
  }
  
  

  background(bg_level2);
  //test any overlap
  //first group name.overlap(second group,callback function)
  enemies.overlap(bullets,enemyHit);
  //did the enemy hit the hero?
  enemies.overlap(hero,heroHit);
  //did the hero touch the powerup?
  powerUps.overlap(hero,powerHit);
  
  
 
 
  textSize(32);
  text("score " + score, 10, 30);
  
  
  //text("health " ,10, 60);
  
  switch(heroHealth){
    case 1:
      image(health_end,40,60);break;
    case 2:
      image(health_half,40,60);break;
    case 3:
      image(health_full,40,60);break;
  }
  
  
  
  //use this in every p5play program
  // only call it once per frame, almost always at the end of the draw
  
  println(hero.getAnimationLabel());
  println(hero.animation.getFrame());
  println(hero.animation.getLastFrame());
  
  if(hero.getAnimationLabel() == "heroLeft" && hero.animation.getFrame() === hero.animation.getLastFrame()){
    hero.changeAnimation("heroDefault");
      //start at the the beginning
      hero.animation.changeFrame(0);
    }
  
  if(hero.getAnimationLabel() == "heroRight" && hero.animation.getFrame() === hero.animation.getLastFrame()){
      hero.changeAnimation("heroDefault");
      //start at the the beginning
      hero.animation.changeFrame(0);
    }
  drawSprites();
  
 }  