function enemyHit(enemy,bullet){
  
  //create explosion when bullet hits enemy
  for(var i = 0; i<explosionDensity; i++){
    var p = createSprite(bullet.position.x, bullet.position.y,2,2);
    
    p.setSpeed(random(3,5), random(360));
    p.friction = 0.95;
    p.life = 15;
  }
  
  enemy.remove();
  explosion.play();
  explosion.amp(.5);
  bullet.remove();
    score++;
    if(score == level1ScoreAdvance){
      gameState = 'levelTwo';
      gameState = 'countDown1';
      heroState = 'regular';
    }
    if(score == level2ScoreAdvance){
      gameState = 'levelThree';
      gameState = 'countDown2';
      heroState = 'regular';
    }
}

function heroHit(enemy,hero){
  heroState = 'regular';
  heroHealth--;
  if(heroHealth <= 0){
    gameState = 'loose';
    splash.play();
    splash.amp(2);
  }
  enemy.remove();
  hero_hit.play();
  hero_hit.amp(.5);
  //put hero hit sound here
  hero.shapeColor = 'red';
  
}

function powerHit(powerUp,hero){
  powerUp.remove();
  power_up.play();
  power_up.amp(.5);
  heroState = "power";
}