var cleanstuff;
var somegroup ;
var obstacle ;

var gameState;
gameState = "explain" ;
function preload(){
    somegroup = createGroup();
}

function setup() {
 createCanvas(600,600)
    cleanstuff = createSprite(300,580,30,30)
    

}

function draw() {
 background(rgb(0, 191, 238));
if (gameState == "explain") {
    text("Welcome!",300,50)
    text("Story: You are in a heavy traffic Road, cross the road without and prevent crashing on cars! (Sorry about no images in game)",0,100);
    text("(Sorry about no images in game)",10,130);
    text("Game Goal: You have to avoid obstacles flowing above the screen! The controls are: SD, left and right arrow", 50,250);
    text("If you touch any obstacles you die!",300,300);
    text("Hit enter to start the game!",300,350);
    if (keyDown("enter"))  {
        gameState = "play"
    }
}

if (gameState == "play") {

    if (keyDown("D") || keyDown("right_arrow")) {
        cleanstuff.x = cleanstuff.x + 5 ;
    }
    if (keyDown("A") || keyDown("left_arrow")) {
        cleanstuff.x = cleanstuff.x - 5 ;
    }
    var random2 = Math.round(random(1,10));

    if (random2 == 5) {
        spawnObs();
    }
    if (somegroup.isTouching(cleanstuff)) {
        gameState = "end" ;
        
    }
}
if (gameState == "end") {
    text("Game Over! Press enter to restart!",300,300)
    somegroup.destroyEach();

    if (keyDown("enter"))  {
        gameState = "play"
        cleanstuff.x = 300 ;
        cleanstuff.y = 550 ;
    }
}
    drawSprites();


}
function spawnObs() {
    random0 = Math.round(random(10,500))
    obstacle = createSprite(random0,65,60,60) 
    obstacle.velocityY = 7 ;
    obstacle.lifetime = 600 ;
    somegroup.add(obstacle);
}