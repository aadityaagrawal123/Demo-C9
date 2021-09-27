var box 

function setup() {
  createCanvas(400,400);
box = createSprite (200,200,30,30);
 
}

function draw() 
{
  background("red");
  if (keyIsDown (RIGHT_ARROW)) {
    box.position.x = box.position.x +8;
   }
   if (keyIsDown (LEFT_ARROW)) {
    box.position.x = box.position.x -8;
   }
drawSprites ()
}




